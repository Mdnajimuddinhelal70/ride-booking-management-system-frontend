import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  useGetActiveRideQuery,
  useUpdateRideStatusMutation,
} from "@/redux/features/drivers/driver.api";

export default function RideStatus() {
  const { data: ride, isLoading } = useGetActiveRideQuery(null);
  console.log(ride?.data);
  const [updateRideStatus] = useUpdateRideStatusMutation();

  const handleStatusUpdate = (newStatus: string) => {
    updateRideStatus({ id: ride?.data?._id, status: newStatus });
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (!ride) return <p className="text-center mt-10">No active ride</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-bold text-center">Active Ride</h2>

          <div className="space-y-1 text-center">
            <p className="text-sm text-gray-500">Ride ID: {ride?._id}</p>
            <p className="text-base font-medium">
              Pickup: {ride?.data?.pickupLocation}
            </p>
            <p className="text-base font-medium">
              Destination: {ride?.data?.destinationLocation}
            </p>
            <p className="text-sm font-semibold text-blue-600">
              Status: {ride?.data?.status}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              onClick={() => handleStatusUpdate("picked_up")}
              disabled={ride?.data?.status !== "accepted"}
              className="rounded-2xl"
            >
              Pickup Rider
            </Button>

            <Button
              onClick={() => handleStatusUpdate("in_transit")}
              disabled={ride?.data?.status !== "picked_up"}
              className="rounded-2xl"
            >
              Start Ride
            </Button>

            <Button
              onClick={() => handleStatusUpdate("completed")}
              disabled={ride?.data?.status !== "in_transit"}
              className="rounded-2xl"
            >
              Complete
            </Button>

            <Button
              variant="destructive"
              onClick={() => handleStatusUpdate("cancelled")}
              disabled={ride?.data?.status === "completed"}
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
