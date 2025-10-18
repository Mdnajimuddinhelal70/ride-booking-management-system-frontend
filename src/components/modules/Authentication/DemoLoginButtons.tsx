// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Button } from "@/components/ui/button";
// import { useLoginMutation } from "@/redux/features/auth/auth.api";
// import { useNavigate } from "react-router";
// import { toast } from "sonner";

// const DemoLoginButtons = () => {
//   const [login] = useLoginMutation();
//   const navigate = useNavigate();

//   const handleDemoLogin = async (role: "admin" | "driver" | "rider") => {
//     try {
//       let credentials;

//       if (role === "admin") {
//         credentials = { email: "admin@gmail.com", password: "123456!@NN" };
//       } else if (role === "driver") {
//         credentials = { email: "driver@gmail.com", password: "123456!@NN" };
//       } else {
//         credentials = { email: "rider@gmail.com", password: "123456!@NN" };
//       }

//       // redux login call
//       const result = await login(credentials).unwrap();
//       console.log(result);

//       toast.success("Login successful!");

//       // save token
//       localStorage.setItem("token", result.accessToken);

//       // redirect based on role
//       if (role === "admin") {
//         navigate("/admin/add-ride");
//       } else if (role === "driver") {
//         navigate("/driver/accept-rideRequests");
//       } else {
//         navigate("/rider/ride-request");
//       }
//     } catch (error: any) {
//       console.error(error);
//       toast.error(error?.data?.message || "Login failed!");
//     }
//   };

//   return (
//     <div className="flex gap-3 mt-4">
//       <Button onClick={() => handleDemoLogin("admin")}>Login as Admin</Button>
//       <Button onClick={() => handleDemoLogin("driver")}>Login as Driver</Button>
//       <Button onClick={() => handleDemoLogin("rider")}>Login as Rider</Button>
//     </div>
//   );
// };

// export default DemoLoginButtons;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const DemoLoginButtons = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleDemoLogin = async (role: "admin" | "driver" | "rider") => {
    try {
      let credentials;

      if (role === "admin") {
        credentials = { email: "admin@gmail.com", password: "123456!@NN" };
      } else if (role === "driver") {
        credentials = { email: "driver@gmail.com", password: "123456!@NN" };
      } else {
        credentials = { email: "rider@gmail.com", password: "123456!@NN" };
      }

      // redux login call
      const result: any = await login(credentials).unwrap();
      console.log(result);

      toast.success("Login successful!");

      // ✅ পরিবর্তন এখানে করেছি ↓↓↓
      // আগের ছিল -> localStorage.setItem("token", result.accessToken);
      // এখন সঠিকভাবে টোকেন সেট করছি যেটা axios interceptor পড়বে
      localStorage.setItem("accessToken", result?.data?.accessToken);
      console.log(result?.data?.accessToken);
      // ↑↑↑ এই লাইনটা যোগ করা হয়েছে যাতে axiosInstance interceptor কাজ করে

      // redirect based on role
      if (role === "admin") {
        navigate("/admin/add-ride");
      } else if (role === "driver") {
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
      <Button onClick={() => handleDemoLogin("admin")}>Login as Admin</Button>
      <Button onClick={() => handleDemoLogin("driver")}>Login as Driver</Button>
      <Button onClick={() => handleDemoLogin("rider")}>Login as Rider</Button>
    </div>
  );
};

export default DemoLoginButtons;
