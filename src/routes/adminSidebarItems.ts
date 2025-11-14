import AdminUserManagement from "@/pages/Admin/AdminUserManagement";
import AnalyticsDashboard from "@/pages/Admin/AnalyticsDashboard";
import RideOversight from "@/pages/Admin/RideOversight";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Users Management",
        url: "/admin/user-mangement",
        component: AdminUserManagement,
      },
      {
        title: "Ride Oversight",
        url: "/admin/all-rides",
        component: RideOversight,
      },
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: AnalyticsDashboard,
      },
    ],
  },
];
