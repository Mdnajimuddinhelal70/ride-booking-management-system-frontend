/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { jwtDecode } from "jwt-decode";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
type JwtPayload = {
  userId: string;
  email: string;
  role: "ADMIN" | "RIDER" | "DRIVER";
  iat: number;
  exp: number;
};
type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const id = useId();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const result = await login(data).unwrap();
      console.log(result);
      toast.success("Login successful!");

      const token = result.data.accessToken;
      localStorage.setItem("accessToken", token);
      const decoded = jwtDecode<JwtPayload>(token);

      // Token decode
      // const decoded = jwtDecode<JwtPayload>(token);
      // console.log("TOKEN:", token);
      if (decoded.role === "ADMIN") {
        navigate("/admin/add-ride");
      } else if (decoded.role === "RIDER") {
        navigate("/rider/ride-request");
      } else if (decoded.role === "DRIVER") {
        navigate("/driver/accept-rideRequests");
      } else {
        navigate("/");
      }
    } catch (error: any) {
      console.log(error);
      const errorMessage = error?.data?.message || "Login failed";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl p-8 shadow-lg">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <svg
              className="stroke-zinc-800 dark:stroke-zinc-100"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center">Welcome back</h2>
          <p className="text-muted-foreground text-sm text-center">
            Enter your credentials to login to your account.
          </p>
        </div>

        {/* ✅ shadcn form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-4">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={`${id}-email`}>Email</FormLabel>
                    <FormControl>
                      <Input
                        id={`${id}-email`}
                        placeholder="Enter your email..."
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={`${id}-password`}>Password</FormLabel>
                    <FormControl>
                      <Input
                        id={`${id}-password`}
                        placeholder="Enter your password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit button */}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-500 mt-4">
          New here?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
