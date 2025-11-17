/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAdminUsersQuery } from "@/redux/features/admin/admin.api";
import { useState } from "react";

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const role = "";
  const { data, isLoading } = useGetAdminUsersQuery({
    search,
    role,
    status,
    page: 1,
    limit: 10,
  });

  if (isLoading) return <div>Data Loading...</div>;

  const users = data?.data || [];

  const filtered = users?.filter((u: any) => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status ? u.status === status : true;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-6 space-y-4">
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select onValueChange={(v) => setStatus(v)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Users List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {filtered.map((user: any) => (
              <div
                key={user._id}
                className="p-3 border rounded-xl flex justify-between"
              >
                <span>
                  {user.name} — {user.email}
                </span>

                <span
                  className={
                    user.status === "active" ? "text-green-600" : "text-red-600"
                  }
                >
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
