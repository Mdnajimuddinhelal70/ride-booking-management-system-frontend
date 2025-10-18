import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RideHistory = () => {
  const rides = [
    {
      pickupLocation: "Nadar Ghat",
      destinationLocation: "Chunar Ghat",
      status: "completed",
      driverName: "Rahim Uddin",
      ridePrice: 350,
      requestedAt: "2025-10-10T10:20:00",
    },
    {
      pickupLocation: "Sylhet-2",
      destinationLocation: "Dhanmondi",
      status: "cancelled",
      driverName: "Kamal Hossain",
      ridePrice: 0,
      requestedAt: "2025-10-12T08:45:00",
    },
    {
      pickupLocation: "Airport",
      destinationLocation: "Mirpur",
      status: "requested",
      driverName: "Pending",
      ridePrice: 480,
      requestedAt: "2025-10-14T12:15:00",
    },
  ];

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
            {rides.map((ride, idx) => (
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
