import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  useGetDriverProfileQuery,
  useUpdateDriverProfileMutation,
} from "@/redux/features/drivers/driver.api";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const DriverProfile = () => {
  const { data, isLoading } = useGetDriverProfileQuery(undefined);
  // console.log(data?.data);
  const [updateProfile] = useUpdateDriverProfileMutation();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    vehicleModel: "",
    plateNumber: "",
    color: "",
  });

  useEffect(() => {
    if (data?.data) {
      const { name, phoneNumber, vehicleInfo } = data.data;
      setFormData({
        name: name || "",
        phoneNumber: phoneNumber || "",
        vehicleModel: vehicleInfo?.model || "",
        plateNumber: vehicleInfo?.plateNumber || "",
        color: vehicleInfo?.color || "",
      });
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      vehicleInfo: {
        model: formData.vehicleModel,
        plateNumber: formData.plateNumber,
        color: formData.color,
      },
    };

    await updateProfile(payload).unwrap();
    toast.success("Updated succesfully");
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Driver Profile Management
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label>Name</label>
          <Input name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div>
          <label>Phone</label>
          <Input
            name="phone"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Vehicle Model</label>
          <Input
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Plate Number</label>
          <Input
            name="plateNumber"
            value={formData.plateNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Color</label>
          <Input name="color" value={formData.color} onChange={handleChange} />
        </div>

        <Button type="submit" className="w-full">
          Update Profile
        </Button>
      </form>
    </div>
  );
};

export default DriverProfile;
