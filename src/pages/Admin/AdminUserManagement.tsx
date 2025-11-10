/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  useGetAllUsersQuery,
  useUpdateDriverApprovalMutation,
  useUpdateUserStatusMutation,
} from "@/redux/features/admin/admin.api";
import { useState } from "react";

const AdminUserManagement = () => {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const { data, isLoading, refetch } = useGetAllUsersQuery({
    search,
    role: roleFilter,
    status: statusFilter,
  });

  const [updateUserStatus] = useUpdateUserStatusMutation();
  const [updateDriverApproval] = useUpdateDriverApprovalMutation();

  if (isLoading) return <div>Loading...</div>;

  const users = data?.data || [];

  const handleToggleStatus = async (user: any) => {
    if (user.role === "driver") {
      const newApproval =
        (user.driverApproval || "Suspended") === "Approved"
          ? "Suspended"
          : "Approved";
      await updateDriverApproval({
        id: user._id,
        approvalStatus: newApproval,
      }).unwrap();
    } else {
      const newStatus = user.status === "Active" ? "Blocked" : "Active";
      await updateUserStatus({ id: user._id, status: newStatus }).unwrap();
    }
    refetch();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">User Management</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">All Roles</option>
          <option value="rider">Rider</option>
          <option value="driver">Driver</option>
          <option value="admin">Admin</option>
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Blocked">Blocked</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status / Approval</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2 capitalize">{user.role}</td>
              <td
                className={`border p-2 font-semibold ${
                  user.status === "Active" ? "text-green-600" : "text-red-600"
                }`}
              >
                {user.role === "driver"
                  ? user.driverApproval || "Suspended"
                  : user.status}
              </td>
              <td className="border p-2">
                <Button
                  variant={
                    user.role === "driver"
                      ? (user.driverApproval || "Suspended") === "Approved"
                        ? "destructive"
                        : "default"
                      : user.status === "Active"
                      ? "destructive"
                      : "default"
                  }
                  onClick={() => handleToggleStatus(user)}
                >
                  {user.role === "driver"
                    ? (user.driverApproval || "Suspended") === "Approved"
                      ? "Suspend"
                      : "Approve"
                    : user.status === "Active"
                    ? "Block"
                    : "Unblock"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserManagement;
