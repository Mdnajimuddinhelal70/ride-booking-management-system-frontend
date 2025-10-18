/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRiderHistoryQuery } from "@/redux/features/rides/ride.api";

const RideHistory = () => {
  const { data, isLoading, isError } = useRiderHistoryQuery();
  const rides = data?.data || [];
  console.log(rides);
  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load rides!</p>
    );

  return (
    <Card className="shadow-lg border border-gray-200">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Ride History
        </h2>

        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="font-semibold">Pickup</TableHead>
              <TableHead className="font-semibold">Destination</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Driver</TableHead>
              <TableHead className="font-semibold">Fare</TableHead>
              <TableHead className="font-semibold">Requested At</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {rides?.map((ride: any, idx: any) => (
              <TableRow key={idx}>
                <TableCell>{ride.pickupLocation}</TableCell>
                <TableCell>{ride.destinationLocation}</TableCell>
                <TableCell
                  className={`capitalize font-medium ${
                    ride.status === "completed"
                      ? "text-green-600"
                      : ride.status === "cancelled"
                      ? "text-red-500"
                      : "text-yellow-600"
                  }`}
                >
                  {ride.status}
                </TableCell>
                <TableCell>{ride.driverName}</TableCell>
                <TableCell>${ride.ridePrice}</TableCell>
                <TableCell>
                  {new Date(ride.requestedAt).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RideHistory;
