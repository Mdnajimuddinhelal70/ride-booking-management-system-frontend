import RequestRide from "@/pages/Rider/RequestRide";
import type { ISidebarItem } from "@/types";

export const riderSidebarItems: ISidebarItem[] = [
  {
    title: "Ride Request",
    items: [
      {
        title: "Ride Request",
        url: "/rider/ride-request",
        component: RequestRide,
      },
    ],
  },
];
