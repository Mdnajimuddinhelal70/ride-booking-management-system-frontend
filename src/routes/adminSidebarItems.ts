import AddRide from "@/pages/Admin/AddRide";
import UserManagement from "@/pages/Admin/UserManagement";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Add Ride",
        url: "/admin/add-ride",
        component: AddRide,
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        title: "User Management",
        url: "/admin/usermanagement",
        component: UserManagement,
      },
    ],
  },
];
