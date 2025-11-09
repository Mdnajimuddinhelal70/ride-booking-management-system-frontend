import { Button } from "@/components/ui/button";
import { useGetRideHistoryQuery } from "@/redux/features/drivers/driver.api";

import { useState } from "react";

const DriverRideHistory = () => {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");

  const { data, isLoading } = useGetRideHistoryQuery({
    page,
    limit: 5,
    status,
  });

  if (isLoading) return <div>Loading...</div>;

  const rides = data?.data?.rides || [];
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
      </select>

      {/* Ride List */}
      <ul>
        {rides.map((ride) => (
          <li
            key={ride._id}
            className="border p-3 rounded mb-2 flex justify-between"
          >
            <div>
              <p>
                <b>From:</b> {ride.pickupLocation}
              </p>
              <p>
                <b>To:</b> {ride.destinationLocation}
              </p>
              <p>
                <b>Status:</b> {ride.status}
              </p>
            </div>
            <span>{new Date(ride.createdAt).toLocaleDateString()}</span>
          </li>
        ))}
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
