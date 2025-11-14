import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function AnalyticsDashboard() {
  const summaryData = {
    totalRides: 320,
    totalRevenue: 54000,
    activeDrivers: 45,
    activeRiders: 120,
  };

  // Fake chart data
  const chartData = [
    { date: "Mon", rides: 30, revenue: 1200 },
    { date: "Tue", rides: 40, revenue: 1500 },
    { date: "Wed", rides: 35, revenue: 1300 },
    { date: "Thu", rides: 50, revenue: 2000 },
    { date: "Fri", rides: 60, revenue: 2500 },
    { date: "Sat", rides: 90, revenue: 3500 },
    { date: "Sun", rides: 70, revenue: 3000 },
  ];

  const [metric, setMetric] = useState("rides"); // rides | revenue
  const [groupBy, setGroupBy] = useState("day"); // day | week | month

  // Fake Top Drivers
  const topDrivers = [
    { name: "John Driver", rides: 120, earnings: 15000 },
    { name: "Adam Smith", rides: 90, earnings: 11000 },
    { name: "Rohan Das", rides: 75, earnings: 9000 },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Analytics Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Rides</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            {summaryData.totalRides}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            ${summaryData.totalRevenue}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Drivers</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            {summaryData.activeDrivers}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Riders</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            {summaryData.activeRiders}
          </CardContent>
        </Card>
      </div>

      {/* Trends Chart */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Ride & Revenue Trends</CardTitle>

            <div className="flex gap-4">
              <Select onValueChange={setMetric}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Metric" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rides">Rides</SelectItem>
                  <SelectItem value="revenue">Revenue</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setGroupBy}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Group By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Day</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey={metric}
                  stroke="#4f46e5"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Top Drivers */}
      <Card>
        <CardHeader>
          <CardTitle>Top Drivers</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Driver</th>
                <th className="p-2">Completed Rides</th>
                <th className="p-2">Earnings</th>
              </tr>
            </thead>
            <tbody>
              {topDrivers.map((driver, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{driver.name}</td>
                  <td className="p-2">{driver.rides}</td>
                  <td className="p-2">${driver.earnings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
