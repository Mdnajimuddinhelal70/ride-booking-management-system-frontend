import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

// Fake ride data
const fakeRide = {
  id: "RID12345",
  pickup: "Mirpur 10",
  destination: "Dhanmondi 27",
  status: "accepted",
};

export default function RideStatus() {
  const [ride, setRide] = useState(fakeRide);

  const handleStatusUpdate = (newStatus: string) => {
    setRide({ ...ride, status: newStatus });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-bold text-center">Active Ride</h2>

          <div className="space-y-1 text-center">
            <p className="text-sm text-gray-500">Ride ID: {ride.id}</p>
            <p className="text-base font-medium">Pickup: {ride.pickup}</p>
            <p className="text-base font-medium">
              Destination: {ride.destination}
            </p>
            <p className="text-sm font-semibold text-blue-600">
              Status: {ride.status}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              onClick={() => handleStatusUpdate("picked_up")}
              disabled={ride.status !== "accepted"}
              className="rounded-2xl"
            >
              Pickup Rider
            </Button>

            <Button
              onClick={() => handleStatusUpdate("in_transit")}
              disabled={ride.status !== "picked_up"}
              className="rounded-2xl"
            >
              Start Ride
            </Button>

            <Button
              onClick={() => handleStatusUpdate("completed")}
              disabled={ride.status !== "in_transit"}
              className="rounded-2xl"
            >
              Complete
            </Button>

            <Button
              variant="destructive"
              onClick={() => handleStatusUpdate("cancelled")}
              disabled={ride.status === "completed"}
              className="rounded-2xl"
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
