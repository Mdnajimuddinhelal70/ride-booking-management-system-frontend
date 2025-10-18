/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateRideRequestMutation } from "@/redux/features/rides/ride.api";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RideRequestForm() {
  const [createRideRequest] = useCreateRideRequestMutation();
  const [ride, setRide] = useState({
    pickupLocation: "",
    destinationLocation: "",
    ridePrice: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setRide({ ...ride, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await createRideRequest(ride).unwrap();
      toast.success(res.message);
      console.log("Ride Created:", res.data);
      setRide({
        pickupLocation: "",
        destinationLocation: "",
        ridePrice: "",
      });
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to create ride!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 shadow-lg rounded-xl bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Request a Ride
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="pickupLocation"
          placeholder="Pickup location"
          value={ride.pickupLocation}
          onChange={handleChange}
          required
        />
        <Input
          name="destinationLocation"
          placeholder="Destination"
          value={ride.destinationLocation}
          onChange={handleChange}
          required
        />
        <Input
          name="ridePrice"
          type="number"
          placeholder="Estimated Fare"
          value={ride.ridePrice}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full bg-indigo-600 text-white">
          Request Ride
        </Button>
      </form>
    </div>
  );
}
