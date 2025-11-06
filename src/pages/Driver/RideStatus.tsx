/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { useGetActiveRideQuery } from "@/redux/features/drivers/driver.api";
// import { useUpdateRideStatusMutation } from "@/redux/features/rides/ride.api";

// export default function RideStatus() {
//   const { data: ride, isLoading } = useGetActiveRideQuery(null);
//   console.log(ride?.data);
//   const [updateRideStatus] = useUpdateRideStatusMutation();

//   const handleStatusUpdate = (newStatus: string) => {
//     updateRideStatus({ id: ride?.data?._id, status: newStatus });
//   };

//   if (isLoading) return <p className="text-center mt-10">Loading...</p>;
//   if (!ride) return <p className="text-center mt-10">No active ride</p>;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//       <Card className="w-full max-w-md shadow-lg rounded-2xl">
//         <CardContent className="p-6 space-y-4">
//           <h2 className="text-xl font-bold text-center">Active Ride</h2>

//           <div className="space-y-1 text-center">
//             <p className="text-sm text-gray-500">Ride ID: {ride?._id}</p>
//             <p className="text-base font-medium">
//               Pickup: {ride?.data?.pickupLocation}
//             </p>
//             <p className="text-base font-medium">
//               Destination: {ride?.data?.destinationLocation}
//             </p>
//             <p className="text-sm font-semibold text-blue-600">
//               Status: {ride?.data?.status}
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-2">
//             <Button
//               onClick={() => handleStatusUpdate("picked_up")}
//               disabled={ride?.data?.status !== "accepted"}
//               className="rounded-2xl"
//             >
//               Pickup Rider
//             </Button>

//             <Button
//               onClick={() => handleStatusUpdate("in_transit")}
//               disabled={ride?.data?.status !== "picked_up"}
//               className="rounded-2xl"
//             >
//               Start Ride
//             </Button>

//             <Button
//               onClick={() => handleStatusUpdate("completed")}
//               disabled={ride?.data?.status !== "in_transit"}
//               className="rounded-2xl"
//             >
//               Complete
//             </Button>

//             <Button
//               variant="destructive"
//               onClick={() => handleStatusUpdate("cancelled")}
//               disabled={ride?.data?.status === "completed"}
//               className="rounded-2xl"
//             >
//               Cancel
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import {
  useGetRideByIdQuery,
  useUpdateRideStatusMutation,
} from "@/redux/features/drivers/driver.api";

import type { RideStatus } from "@/types/ride.type";
import React from "react";
import { useParams } from "react-router";

const RideActions: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // ✅ renamed to avoid conflict with props
  const {
    data: rideData,
    isLoading: isFetching,
    isError,
  } = useGetRideByIdQuery(id!);

  // ✅ added mutation loading state
  const [updateRideStatus, { isLoading: isUpdating }] =
    useUpdateRideStatusMutation();

  const handleStatusChange = async (newStatus: RideStatus) => {
    try {
      await updateRideStatus({ id: rideData!._id, status: newStatus }).unwrap();
      alert(`Ride status updated to ${newStatus}`);
    } catch (err: any) {
      alert(err.data?.message || err.message);
    }
  };

  if (isFetching) return <div>Loading...</div>;
  if (isError || !rideData) return <div>Ride not found</div>;

  return (
    <div className="flex flex-wrap gap-2">
      {rideData.status === "accepted" && (
        <Button
          variant="default"
          size="sm"
          disabled={isUpdating}
          onClick={() => handleStatusChange("picked_up")}
        >
          Picked Up
        </Button>
      )}

      {rideData.status === "picked_up" && (
        <Button
          variant="secondary"
          size="sm"
          disabled={isUpdating}
          onClick={() => handleStatusChange("in_transit")}
        >
          Start Ride
        </Button>
      )}

      {rideData.status === "in_transit" && (
        <Button
          variant="default"
          className="bg-green-500 text-white"
          size="sm"
          disabled={isUpdating}
          onClick={() => handleStatusChange("completed")}
        >
          Complete Ride
        </Button>
      )}

      {rideData.status === "requested" && (
        <span className="text-muted-foreground">
          Waiting for driver to accept
        </span>
      )}

      {rideData.status === "completed" && (
        <span className="text-green-600 font-semibold">Ride Completed</span>
      )}
    </div>
  );
};

export default RideActions;
