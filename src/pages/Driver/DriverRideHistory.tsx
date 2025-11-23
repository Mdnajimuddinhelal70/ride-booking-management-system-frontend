import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useGetRideHistoryQuery } from "@/redux/features/drivers/driver.api";
import type { IRide } from "@/types/ride.type";
import { Calendar, Car, MapPin } from "lucide-react";
import { useState } from "react";

const DriverRideHistory = () => {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");

  const { data, isLoading } = useGetRideHistoryQuery({
    page,
    limit: 3,
    status,
  });

  if (isLoading) return <div className="text-center py-10">Loading...</div>;

  const rides: IRide[] = data?.data?.rides || [];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      case "requested":
        return "bg-yellow-100 text-yellow-700";
      case "accepted":
        return "bg-cyan-100 text-cyan-700";
      case "ongoing":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
        Driver Ride History
      </h2>

      {/* Filter */}
      <div className="flex justify-end mb-6">
        <select
          className="border rounded px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-indigo-400"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Rides</option>
          <option value="requested">Requested</option>
          <option value="accepted">Accepted</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-5 justify-center">
        {rides.map((ride) => (
          <Card
            key={ride._id}
            className="w-[300px] shadow-md hover:shadow-lg transition border border-gray-100 rounded-lg"
          >
            <CardHeader className="flex justify-between items-center bg-indigo-50 rounded-t-lg p-4">
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-indigo-600" />
                <span className="font-semibold text-indigo-700">
                  Ride Details
                </span>
              </div>
              <Badge className={`${getStatusColor(ride.status)} capitalize`}>
                {ride.status}
              </Badge>
            </CardHeader>

            <CardContent className="p-4 space-y-2">
              <p className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-green-600" />
                <b>From:</b> {ride.pickupLocation}
              </p>
              <p className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-red-600" />
                <b>To:</b> {ride.destinationLocation}
              </p>
              <p className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                {new Date(ride.createdAt).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          ⬅ Prev
        </Button>
        <Button
          variant="outline"
          disabled={page >= data?.data?.totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next ➡
        </Button>
      </div>
    </div>
  );
};

export default DriverRideHistory;
