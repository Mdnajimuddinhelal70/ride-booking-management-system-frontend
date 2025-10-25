/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  useUpdateProfileMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import React, { useEffect, useState } from "react";

interface FormState {
  name: string;
  phoneNumber: string;
  oldPassword: string;
  newPassword: string;
}

export default function ProfileUpdate() {
  const { data: userData } = useUserInfoQuery(undefined);
  console.log(userData.data);
  const [updateProfile] = useUpdateProfileMutation();

  const [form, setForm] = useState<FormState>({
    name: "",
    phoneNumber: "",
    oldPassword: "",
    newPassword: "",
  });

  // User data load
  useEffect(() => {
    if (userData) {
      setForm((prev) => ({
        ...prev,
        name: userData.name || "",
        phoneNumber: userData.phoneNumber || "",
      }));
    }
  }, [userData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile(form).unwrap();
      alert("Profile updated successfully!");
    } catch (err: any) {
      alert(err?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl flex flex-col md:flex-row gap-8">
      {/* Left: Form */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Update Profile
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Phone Number
            </label>
            <Input
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Old Password
            </label>
            <Input
              name="oldPassword"
              type="password"
              value={form.oldPassword}
              onChange={handleChange}
              placeholder="Old Password"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              New Password
            </label>
            <Input
              name="newPassword"
              type="password"
              value={form.newPassword}
              onChange={handleChange}
              placeholder="New Password"
              className="w-full"
            />
          </div>

          {/* Future fields based on role */}
          {userData?.role === "driver" && (
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Driver License
              </label>
              <Input
                name="driverLicense"
                value={(form as any).driverLicense || ""}
                onChange={handleChange}
                placeholder="Driver License"
                className="w-full"
              />
            </div>
          )}

          <Button type="submit" className="mt-4 w-full">
            Update Profile
          </Button>
        </form>
      </div>

      {/* Right: Preview */}
      <div className="flex-1 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-inner flex flex-col justify-center gap-3">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          Profile Preview
        </h3>
        <p>
          <span className="font-medium">Name:</span>{" "}
          {form.name || userData?.name}
        </p>
        <p>
          <span className="font-medium">Phone:</span>{" "}
          {form.phoneNumber || userData?.phoneNumber}
        </p>
        <p>
          <span className="font-medium">Email:</span> {userData?.data?.email}
        </p>
        <p>
          <span className="font-medium">Role:</span> {userData?.data?.role}
        </p>
      </div>
    </div>
  );
}
