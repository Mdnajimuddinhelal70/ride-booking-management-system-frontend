import AcceptRideRequests from "@/pages/Driver/AcceptRideRequests";
import type { ISidebarItem } from "@/types";

export const driverSidebarItems: ISidebarItem[] = [
  {
    title: "Driver",
    items: [
      {
        title: "Accept Ride Requests",
        url: "/driver/accept-rideRequests",
        component: AcceptRideRequests,
      },
    ],
  },
];
