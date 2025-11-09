import { Button } from "@/components/ui/button";
import { useGetRideHistoryQuery } from "@/redux/features/drivers/driver.api";
import type { IRide } from "@/types/ride.type";
import { useState } from "react";

const DriverRideHistory = () => {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");

  const { data, isLoading } = useGetRideHistoryQuery({
    page,
    limit: 2,
    status,
  });

  if (isLoading) return <div>Loading...</div>;

  const rides: IRide[] = data?.data?.rides || [];
  console.log(rides);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-3">Ride History</h2>

      {/* Filter */}
      <select
        className="border p-2 mb-4"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All</option>
        <option value="completed">Completed</option>
        <option value="cancelled">Cancelled</option>
        <option value="requested">Requested</option>
        <option value="accepted">Accepted</option>
      </select>

      {/* Ride List */}
      <ul>
        {rides.map((ride) => {
          let statusColor = "";

          switch (ride.status) {
            case "completed":
              statusColor = "text-green-600 bg-green-100";
              break;
            case "cancelled":
              statusColor = "text-red-600 bg-red-100";
              break;
            case "requested":
              statusColor = "text-yellow-600 bg-yellow-100";
              break;
            case "accepted":
              statusColor = "text-cyan-600 bg-cyan-200";
              break;
            case "ongoing":
              statusColor = "text-blue-600 bg-blue-100";
              break;
            default:
              statusColor = "text-gray-600 bg-gray-100";
          }

          return (
            <li
              key={ride._id}
              className="border p-3 rounded mb-2 flex justify-between items-center"
            >
              <div>
                <p>
                  <b className="text-xl">From:</b> {ride.pickupLocation}
                </p>
                <p>
                  <b className="text-xl">To:</b> {ride.destinationLocation}
                </p>
                <p>
                  <b>Status:</b>{" "}
                  <span
                    className={`px-2 py-1 rounded-md font-semibold ${statusColor}`}
                  >
                    {ride.status}
                  </span>
                </p>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(ride.createdAt).toLocaleDateString()}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Pagination */}
      <div className="flex gap-2 mt-3">
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button
          disabled={page >= data?.data?.totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default DriverRideHistory;
