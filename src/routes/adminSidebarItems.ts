import AdminDriversPage from "@/pages/Admin/AdminDriversPage";
import AdminRidesPage from "@/pages/Admin/AdminRidesPage";
import AdminUserManagement from "@/pages/Admin/AdminUserManagement";
import AdminUsersPage from "@/pages/Admin/AdminUsersPage";
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
      {
        title: "Admin Users",
        url: "/admin/admin-users",
        component: AdminUsersPage,
      },
      {
        title: "Admin Drivers",
        url: "/admin/admin-divers",
        component: AdminDriversPage,
      },
      {
        title: "Admin Riders",
        url: "/admin/admin-riders",
        component: AdminRidesPage,
      },
    ],
  },
];
