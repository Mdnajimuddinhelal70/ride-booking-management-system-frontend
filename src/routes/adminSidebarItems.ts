import AddRide from "@/pages/Admin/AddRide";
import AdminUserManagement from "@/pages/Admin/AdminUserManagement";
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
        title: "Add Ride",
        url: "/admin/add-ride",
        component: AddRide,
      },
    ],
  },
];
