import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RoleRoute({
  role,
  children,
}: {
  role: "ADMIN" | "RIDER" | "DRIVER";
  children: JSX.Element;
}) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/login" replace />;

  if (user.role !== role) return <Navigate to="/unauthorized" replace />;

  return children;
}
