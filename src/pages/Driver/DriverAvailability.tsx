/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useUpdateAvailabilityMutation } from "@/redux/features/drivers/driver.api";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const DriverAvailability = () => {
  // Get logged-in driver data (includes current availability)
  const { data: userData, isLoading: userLoading } = useUserInfoQuery(null);

  const [status, setStatus] = useState("offline");
  const [updateAvailability, { isLoading }] = useUpdateAvailabilityMutation();

  useEffect(() => {
    if (userData?.data?.availability) {
      setStatus(userData.data.availability);
    }
  }, [userData]);

  const handleToggle = async () => {
    const newStatus = status === "online" ? "offline" : "online";

    try {
      await updateAvailability({ availability: newStatus }).unwrap();
      setStatus(newStatus);
      toast.success(`You are now ${newStatus}`);
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  if (userLoading) {
    return (
      <div className="flex justify-center py-4">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 p-4 border rounded-lg shadow-md max-w-sm mx-auto my-6">
      <h2 className="text-lg font-bold">Driver Availability</h2>

      <p className="text-sm text-muted-foreground">
        Current Status: <span className="font-semibold">{status}</span>
      </p>

      <Button
        onClick={handleToggle}
        disabled={isLoading}
        className={`w-full font-medium ${
          status === "online"
            ? "bg-green-600 hover:bg-green-700"
            : "bg-gray-600 hover:bg-gray-700"
        }`}
      >
        {isLoading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}

        {status === "online" ? "Go Offline" : "Go Online"}
      </Button>
    </div>
  );
};

export default DriverAvailability;
