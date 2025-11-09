import AcceptRideRequests from "@/pages/Driver/AcceptRideRequests";
import DriverAvailability from "@/pages/Driver/DriverAvailability";
import DriverProfile from "@/pages/Driver/DriverProfile";
import DriverRideHistory from "@/pages/Driver/DriverRideHistory";
import RideStatus from "@/pages/Driver/RideStatus";

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
        title: "Driver Availability",
        url: "/driver/availability",
        component: DriverAvailability,
      },
      {
        title: "Ride Status",
        url: "/driver/status",
        component: RideStatus,
      },
      {
        title: "Ride History",
        url: "/driver/history",
        component: DriverRideHistory,
      },
      {
        title: "Driver Profile",
        url: "/driver/profile",
        component: DriverProfile,
      },
    ],
  },
];
