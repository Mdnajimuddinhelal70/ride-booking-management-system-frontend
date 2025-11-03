import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGetPendingRidesQuery } from "@/redux/features/drivers/driver.api";
import { useHandleRideActionMutation } from "@/redux/features/rides/ride.api";
import type { RideRequest } from "@/types/ride.type";
import React from "react";

const AcceptRideRequests: React.FC = () => {
  const { data: rideRequestsResponse, isLoading } =
    useGetPendingRidesQuery(null);

  const [localRides, setLocalRides] = React.useState<RideRequest[]>([]);

  const [updateRideStatus, { isLoading: isUpdating }] =
    useHandleRideActionMutation();

  React.useEffect(() => {
    if (rideRequestsResponse?.data) {
      setLocalRides(rideRequestsResponse.data);
    }
  }, [rideRequestsResponse]);

  const handleAction = async (rideId: string, action: "accept" | "reject") => {
    try {
      await updateRideStatus({ rideId, action }).unwrap();

      if (action === "accept") {
        const updated = localRides.map((ride) =>
          ride._id === rideId ? { ...ride, status: "accepted" as const } : ride
        );
        setLocalRides(updated);
      }

      if (action === "reject") {
        setLocalRides((prev) => prev.filter((ride) => ride._id !== rideId));
      }
    } catch (err) {
      console.error("Error updating ride:", err);
    }
  };

  if (isLoading) return <p>Loading rides...</p>;
  if (!localRides.length) return <p>No ride requests yet.</p>;

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
          {localRides.map((ride) => (
            <tr key={ride._id} className="hover:bg-gray-50">
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
                      disabled={isUpdating}
                    >
                      Accept
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleAction(ride._id, "reject")}
                      disabled={isUpdating}
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
