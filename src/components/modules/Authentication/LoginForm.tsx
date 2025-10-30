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
import type { TRole } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { jwtDecode } from "jwt-decode";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import DemoLoginButtons from "./DemoLoginButtons";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type JwtPayload = {
  userId: string;
  email: string;
  role: TRole;
  iat: number;
  exp: number;
};

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const id = useId();

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
      toast.success("Login successful!");

      // ✅ Decode token from result
      const decoded = jwtDecode<JwtPayload>(result?.data?.accessToken);

      // ✅ Role based redirect
      if (decoded.role === "admin") {
        navigate("/admin/add-ride");
      } else if (decoded.role === "rider") {
        navigate("/rider/ride-request");
      } else if (decoded.role === "driver") {
        navigate("/driver/accept-rideRequests");
      } else {
        navigate("/");
      }
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Login failed";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex min-height-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl p-8 shadow-lg">
        <div className="flex flex-col items-center gap-2 mb-6">
          <h2 className="text-2xl font-bold text-center">Welcome back</h2>
          <DemoLoginButtons />
          <p className="text-sm text-center text-muted-foreground">
            Enter your credentials to login.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-4">
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

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm text-gray-500 mt-4">
          New here?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
