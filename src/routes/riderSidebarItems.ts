import ProfileUpdate from "@/pages/ProfileUpdate";
import RequestRide from "@/pages/Rider/RequestRide";
import RideHistory from "@/pages/Rider/RideHistory";
import type { ISidebarItem } from "@/types";

export const riderSidebarItems: ISidebarItem[] = [
  {
    title: "Rider Dashboard",
    items: [
      {
        title: "Ride Request",
        url: "/rider/ride-request",
        component: RequestRide,
      },
      {
        title: "Ride History",
        url: "/rider/ride-history",
        component: RideHistory,
      },
      {
        title: "Profile",
        url: "/rider/ride-profile",
        component: ProfileUpdate,
      },
    ],
  },
];
