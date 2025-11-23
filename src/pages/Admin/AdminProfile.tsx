/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useUpdateAdminChangePasswordMutation,
  useUpdateAdminProfileMutation,
} from "@/redux/features/admin/admin.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AdminProfile() {
  const [updateProfile] = useUpdateAdminProfileMutation();
  const [changePassword] = useUpdateAdminChangePasswordMutation();
  const { data: me, isLoading } = useUserInfoQuery(undefined);

  const [profile, setProfile] = useState({
    name: "",
    phoneNumber: "",
    address: "",
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    if (me?.data) {
      setProfile({
        name: me.data.name || "",
        phoneNumber: me.data.phoneNumber || "",
        address: me.data.address || "",
      });
    }
  }, [me]);

  // ✅ Profile Update Handler
  const handleProfileUpdate = async () => {
    try {
      await updateProfile({ id: me?.data?._id, data: profile }).unwrap();
      toast.success("Profile updated successfully!");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to update profile");
    }
  };

  // ✅ Password Change Handler
  const handlePasswordChange = async () => {
    try {
      await changePassword({ id: me?.data?._id, data: passwords }).unwrap();
      toast.success("Password changed successfully!");
      setPasswords({ oldPassword: "", newPassword: "" });
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to change password");
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-10">
      {/* ---------- Profile Update Card ---------- */}
      <Card className="shadow-lg border rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Update Profile
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col space-y-2">
              <Label>Name</Label>
              <Input
                placeholder="Name"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col space-y-2">
              <Label>Phone Number</Label>
              <Input
                placeholder="Phone Number"
                value={profile.phoneNumber}
                onChange={(e) =>
                  setProfile({ ...profile, phoneNumber: e.target.value })
                }
              />
            </div>

            {/* Address */}
            <div className="flex flex-col space-y-2 md:col-span-2">
              <Label>Address</Label>
              <Input
                placeholder="Address"
                value={profile.address}
                onChange={(e) =>
                  setProfile({ ...profile, address: e.target.value })
                }
              />
            </div>
          </div>

          <Button
            onClick={handleProfileUpdate}
            className="mt-6 w-full md:w-auto"
          >
            Save Profile
          </Button>
        </CardContent>
      </Card>

      {/* ---------- Password Change Card ---------- */}
      <Card className="shadow-lg border rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Change Password
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Old Password */}
            <div className="flex flex-col space-y-2">
              <Label>Old Password</Label>
              <Input
                type="password"
                placeholder="Old Password"
                value={passwords.oldPassword}
                onChange={(e) =>
                  setPasswords({ ...passwords, oldPassword: e.target.value })
                }
              />
            </div>

            {/* New Password */}
            <div className="flex flex-col space-y-2">
              <Label>New Password</Label>
              <Input
                type="password"
                placeholder="New Password"
                value={passwords.newPassword}
                onChange={(e) =>
                  setPasswords({ ...passwords, newPassword: e.target.value })
                }
              />
            </div>
          </div>

          <Button
            onClick={handlePasswordChange}
            className="mt-6 w-full md:w-auto"
          >
            Change Password
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
