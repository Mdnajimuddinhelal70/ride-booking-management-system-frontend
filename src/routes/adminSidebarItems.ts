import AdminUserManagement from "@/pages/Admin/AdminUserManagement";
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
    ],
  },
];
