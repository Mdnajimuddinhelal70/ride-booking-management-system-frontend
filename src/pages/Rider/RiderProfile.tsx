// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useUpdateProfileMutation } from "@/redux/features/auth/auth.api";
// import React, { useState } from "react";
// import { toast } from "sonner";

// export default function RiderProfile() {
//   const [updateProfile] = useUpdateProfileMutation();
//   const [formData, setFormData] = useState({
//     name: "",
//     phoneNumber: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     try {
//       const res = await updateProfile(formData).unwrap();
//       toast.success(res.message || "Profile updated successfully!");
//     } catch (error: any) {
//       toast.error(error.data?.message || "Something went wrong!");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
//       <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800 dark:text-gray-100">
//         My Profile
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div>
//           <Label
//             htmlFor="name"
//             className="text-gray-700 dark:text-gray-200 font-medium"
//           >
//             Name
//           </Label>
//           <Input
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             className="mt-1"
//             required
//           />
//         </div>

//         <div>
//           <Label
//             htmlFor="phone"
//             className="text-gray-700 dark:text-gray-200 font-medium"
//           >
//             Phone
//           </Label>
//           <Input
//             id="phone"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             placeholder="Your Phone Number"
//             className="mt-1"
//             required
//           />
//         </div>

//         <Button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
//         >
//           Save Changes
//         </Button>
//       </form>
//     </div>
//   );
// }
