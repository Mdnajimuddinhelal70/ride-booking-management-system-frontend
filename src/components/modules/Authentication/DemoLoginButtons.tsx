/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  useLoginMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const demoUsers = {
  admin: { email: "admin@gmail.com", password: "najim12" },
  driver: { email: "driver1@gmail.com", password: "najim12" },
  rider: { email: "rider@gmail.com", password: "najim12" },
};

const routeMap = {
  admin: "/admin/user-mangement",
  driver: "/driver/accept-rideRequests",
  rider: "/rider/ride-request",
};

const DemoLoginButtons = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const { refetch } = useUserInfoQuery(null);

  const handleDemoLogin: any = async (role: TRole) => {
    try {
      const credentials = demoUsers[role];
      await login(credentials).unwrap();

      await refetch();
      toast.success("Login successful!");

      navigate(routeMap[role]);
    } catch (error: any) {
      toast.error(error?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="flex gap-3 mt-4">
      <Button onClick={() => handleDemoLogin("admin")}>Login as Admin</Button>
      <Button onClick={() => handleDemoLogin("driver")}>Login as Driver</Button>
      <Button onClick={() => handleDemoLogin("rider")}>Login as Rider</Button>
    </div>
  );
};

export default DemoLoginButtons;
