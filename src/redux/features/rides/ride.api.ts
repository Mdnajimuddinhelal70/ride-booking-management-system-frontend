import { baseApi } from "@/redux/baseApi";

const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRideRequest: builder.mutation({
      query: (rideData) => ({
        url: "/ride/request",
        method: "POST",
        data: rideData,
      }),
    }),
  }),
});

export const { useCreateRideRequestMutation } = rideApi;
