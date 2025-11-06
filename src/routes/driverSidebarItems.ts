import AcceptRideRequests from "@/pages/Driver/AcceptRideRequests";
import DriverAvailability from "@/pages/Driver/DriverAvailability";
import RideActions from "@/pages/Driver/RideStatus";

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
      {
        title: "Accept Ride Requests",
        url: "/driver/availability",
        component: DriverAvailability,
      },
      {
        title: "Ride Status",
        url: "/driver/status",
        component: RideActions,
      },
    ],
  },
];
