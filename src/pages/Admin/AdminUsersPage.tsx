import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const users = [
    { id: 1, name: "John", email: "john@mail.com", status: "active" },
    { id: 2, name: "Sara", email: "sara@mail.com", status: "inactive" },
    { id: 3, name: "Rafi", email: "rafi@mail.com", status: "active" },
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
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Users List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {filtered.map((user) => (
              <div key={user.id} className="p-3 border rounded-xl flex justify-between">
                <span>{user.name} — {user.email}</span>
                <span className={user.status === "active" ? "text-green-600" : "text-red-600"}>
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
