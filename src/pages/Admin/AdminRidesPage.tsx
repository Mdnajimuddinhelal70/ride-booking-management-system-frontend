import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function AdminRidesPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const rides = [
    { id: 1, rider: "Kabir", driver: "Karim", fare: 250, status: "completed" },
    { id: 2, rider: "Sara", driver: "Rahim", fare: 180, status: "ongoing" },
    { id: 3, rider: "Nila", driver: "Selim", fare: 320, status: "cancelled" },
  ];

  const filtered = rides.filter((r) => {
    const matchSearch = r.rider.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status ? r.status === status : true;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-6 space-y-4">
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            placeholder="Search by rider name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select onValueChange={(v) => setStatus(v)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Ride Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="ongoing">Ongoing</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rides List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {filtered.map((ride) => (
              <div
                key={ride.id}
                className="p-3 border rounded-xl flex justify-between w-full"
              >
                <span>
                  <strong>{ride.rider}</strong> → {ride.driver} | Fare:{" "}
                  {ride.fare} TK
                </span>
                <span
                  className={
                    ride.status === "completed"
                      ? "text-green-600"
                      : ride.status === "ongoing"
                      ? "text-blue-600"
                      : "text-red-600"
                  }
                >
                  {ride.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
