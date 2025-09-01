import { Button } from "@/components/ui/button";
import axios from "axios";

const DemoLoginButtons = () => {
  const handleDemoLogin = async (role: "admin" | "driver" | "rider") => {
    try {
      let credentials;

      if (role === "admin") {
        credentials = { email: "admin@demo.com", password: "123456" };
      } else if (role === "driver") {
        credentials = { email: "driver@demo.com", password: "123456" };
      } else {
        credentials = { email: "rider@demo.com", password: "123456" };
      }

      const { data } = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        credentials,
        { withCredentials: true }
      );

      // token save to localStorage
      localStorage.setItem("token", data.token);

      // redirect after login
      window.location.href = "/";
    } catch (error) {
      console.error(error);
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
