/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const DemoLoginButtons = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleDemoLogin = async (role: "ADMIN" | "DRIVER" | "RIDER") => {
    try {
      let credentials;

      if (role === "ADMIN") {
        credentials = { email: "admin@demo.com", password: "123456!@NN" };
      } else if (role === "DRIVER") {
        credentials = { email: "driver@demo.com", password: "123456!@NN" };
      } else {
        credentials = { email: "rider@demo.com", password: "123456!@NN" };
      }

      // redux login call
      const result = await login(credentials).unwrap();
      console.log(result);

      toast.success("Login successful!");

      // save token
      localStorage.setItem("token", result.accessToken);

      // redirect based on role
      if (role === "ADMIN") {
        navigate("/admin/add-ride");
      } else if (role === "DRIVER") {
        navigate("/driver/accept-rideRequests");
      } else {
        navigate("/rider/ride-request");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="flex gap-3 mt-4">
      <Button onClick={() => handleDemoLogin("ADMIN")}>Login as Admin</Button>
      <Button onClick={() => handleDemoLogin("DRIVER")}>Login as Driver</Button>
      <Button onClick={() => handleDemoLogin("RIDER")}>Login as Rider</Button>
    </div>
  );
};

export default DemoLoginButtons;
