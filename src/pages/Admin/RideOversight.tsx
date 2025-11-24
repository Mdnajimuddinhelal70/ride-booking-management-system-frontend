/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllRidesQuery } from "@/redux/features/admin/admin.api";
import { Loader2 } from "lucide-react";

export default function RideOversight() {
  const [filters, setFilters] = useState({
    status: "",
    rider: "",
    driver: "",
    startDate: "",
    endDate: "",
  });

  const { data, isLoading } = useGetAllRidesQuery(filters);
  const rides = data?.data || [];
  // console.log(rides);

  return (
    <Card className="p-4 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">All Rides</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Filter Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-5">
          {/* Status Filter */}
          <Select
            onValueChange={(value) => setFilters({ ...filters, status: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="requested">Requested</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>

          {/* Rider */}
          <Input
            placeholder="Rider ID"
            onChange={(e) => setFilters({ ...filters, rider: e.target.value })}
          />

          {/* Driver */}
          <Input
            placeholder="Driver ID"
            onChange={(e) => setFilters({ ...filters, driver: e.target.value })}
          />

          {/* Date Filters */}
          <Input
            type="date"
            onChange={(e) =>
              setFilters({ ...filters, startDate: e.target.value })
            }
          />
          <Input
            type="date"
            onChange={(e) =>
              setFilters({ ...filters, endDate: e.target.value })
            }
          />
        </div>

        <Button variant="secondary" className="mb-5">
          Apply Filters
        </Button>

        {/* Table Section */}
        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="animate-spin h-6 w-6 text-gray-500" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ride ID</TableHead>
                  <TableHead>Rider</TableHead>
                  <TableHead>Driver</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rides?.map((ride: any) => (
                  <TableRow key={ride._id}>
                    <TableCell>{ride._id}</TableCell>
                    <TableCell>{ride.riderId?.name || "N/A"}</TableCell>
                    <TableCell>{ride.driverId?.name || "N/A"}</TableCell>
                    <TableCell>{ride.status}</TableCell>
                    <TableCell>
                      {new Date(ride.createdAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
