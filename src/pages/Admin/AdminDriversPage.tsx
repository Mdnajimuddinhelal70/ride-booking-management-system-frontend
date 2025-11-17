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

export default function AdminDriversPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const users = [
    { id: 1, name: "Karim", phone: "01711111111", status: "approved" },
    { id: 2, name: "Rahim", phone: "01722222222", status: "pending" },
    { id: 3, name: "Selim", phone: "01733333333", status: "approved" },
  ];

  const filtered = users.filter((u) => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status ? u.status === status : true;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-6 space-y-4">
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select onValueChange={(v) => setStatus(v)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Approved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Drivers List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {filtered.map((user) => (
              <div
                key={user.id}
                className="p-3 border rounded-xl flex justify-between"
              >
                <span>
                  {user.name} — {user.phone}
                </span>
                <span
                  className={
                    user.status === "active" ? "text-green-600" : "text-red-600"
                  }
                >
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
