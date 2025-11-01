import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

type RideRequest = {
  _id: string;
  riderEmail: string;
  pickupLocation: string;
  dropoffLocation: string;
  status: "pending" | "accepted" | "rejected";
};

const AcceptRideRequests: React.FC = () => {
  const [rideRequests, setRideRequests] = useState<RideRequest[]>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      // TODO: replace with real backend API call
      const data: RideRequest[] = [
        {
          _id: "1",
          riderEmail: "john@example.com",
          pickupLocation: "Airport",
          dropoffLocation: "Hotel",
          status: "pending",
        },
        {
          _id: "2",
          riderEmail: "jane@example.com",
          pickupLocation: "Mall",
          dropoffLocation: "Home",
          status: "pending",
        },
      ];
      setRideRequests(data);
    };

    fetchRequests();
  }, []);

  const handleAccept = (rideId: string) => {
    setRideRequests((prev) =>
      prev.map((r) => (r._id === rideId ? { ...r, status: "accepted" } : r))
    );
  };

  const handleReject = (rideId: string) => {
    setRideRequests((prev) =>
      prev.map((r) => (r._id === rideId ? { ...r, status: "rejected" } : r))
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Pending Ride Requests</h2>
      {rideRequests.length === 0 ? (
        <p>No ride requests yet.</p>
      ) : (
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
            {rideRequests.map((ride) => (
              <tr key={ride._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{ride.pickupLocation}</td>
                <td className="border px-4 py-2">{ride.dropoffLocation}</td>
                <td className="border px-4 py-2">{ride.riderEmail}</td>
                <td className="border px-4 py-2">
                  <Badge>{ride.status}</Badge>
                </td>
                <td className="border px-4 py-2 flex gap-2">
                  {ride.status === "pending" && (
                    <>
                      <Button size="sm" onClick={() => handleAccept(ride._id)}>
                        Accept
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleReject(ride._id)}
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
      )}
    </div>
  );
};

export default AcceptRideRequests;
