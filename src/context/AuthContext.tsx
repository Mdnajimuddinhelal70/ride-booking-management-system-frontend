/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type User = {
  name: string;
  role: "ADMIN" | "RIDER" | "DRIVER";
  email: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load user from /me route using cookie
  const refreshUser = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/user/me`,

        {
          withCredentials: true,
        }
      );
      // console.log(import.meta.env.VITE_BACKEND_URL);

      setUser(res.data.data);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      await refreshUser();
      setLoading(false);
    };
    loadUser();
  }, []);

  const logout = async () => {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/auth/logout`,
      {},
      { withCredentials: true }
    );
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
