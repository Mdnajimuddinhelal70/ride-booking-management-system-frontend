/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGetPendingRidesQuery } from "@/redux/features/drivers/driver.api";
import { useUpdateRideStatusMutation } from "@/redux/features/rides/ride.api";
import React from "react";

const AcceptRideRequests: React.FC = () => {
  const { data: rideRequests = [], isLoading } = useGetPendingRidesQuery(null);
  console.log(rideRequests.data);
  const [updateRideStatus] = useUpdateRideStatusMutation();

  const handleAction = async (rideId: string, action: "accept" | "reject") => {
    try {
      await updateRideStatus({ rideId, action }).unwrap();
    } catch (err) {
      console.error("Error updating ride:", err);
    }
  };

  if (isLoading) return <p>Loading rides...</p>;
  if (!rideRequests?.data?.length) return <p>No ride requests yet.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Pending Ride Requests</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Pickup</th>
            <th className="border px-4 py-2 text-left">Dropoff</th>
            <th className="border px-4 py-2 text-left">Rider Email</th>
            <th className="border px-4 py-2 text-left">Status</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rideRequests?.data?.map((ride: any) => (
            <tr key={ride._id}>
              <td className="border px-4 py-2">{ride.pickupLocation}</td>
              <td className="border px-4 py-2">{ride.destinationLocation}</td>
              <td className="border px-4 py-2">{ride.riderEmail}</td>
              <td className="border px-4 py-2">
                <Badge>{ride.status}</Badge>
              </td>
              <td className="border px-4 py-2 flex gap-2">
                {ride.status === "requested" && (
                  <>
                    <Button
                      size="sm"
                      onClick={() => handleAction(ride._id, "accept")}
                    >
                      Accept
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleAction(ride._id, "reject")}
                    >
                      Reject
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AcceptRideRequests;
