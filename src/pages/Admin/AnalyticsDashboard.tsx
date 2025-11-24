/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useGetSummaryQuery,
  useGetTopDriversQuery,
  useGetTrendsQuery,
} from "@/redux/features/admin/admin.api";
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
  const [metric, setMetric] = useState("rides");
  const [groupBy, setGroupBy] = useState("day");

  const { data: summaryRes } = useGetSummaryQuery({});
  const summary = summaryRes?.data || {};

  const { data: trendsRes } = useGetTrendsQuery({ metric, groupBy });
  const chartData = trendsRes?.data || [];
  console.log(chartData);

  const { data: topDriversRes } = useGetTopDriversQuery({ limit: 10 });
  const topDrivers = topDriversRes?.data || [];

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
            {summary.totalRides || 0}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            ${summary.totalRevenue || 0}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Drivers</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            {summary.activeDrivers || 0}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Riders</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            {summary.activeRiders || 0}
          </CardContent>
        </Card>
      </div>

      {/* Trends Chart */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Ride & Revenue Trends</CardTitle>
            <div className="flex gap-4">
              <Select onValueChange={setMetric} defaultValue={metric}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Metric" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rides">Rides</SelectItem>
                  <SelectItem value="revenue">Revenue</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setGroupBy} defaultValue={groupBy}>
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
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey={metric}
                  stroke="blue"
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
              {topDrivers.map((driver: any, idx: any) => (
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
