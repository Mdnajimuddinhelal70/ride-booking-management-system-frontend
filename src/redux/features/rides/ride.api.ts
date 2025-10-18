/* eslint-disable @typescript-eslint/no-unused-vars */
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
    riderHistory: builder.query({
      query: (_?: void) => ({
        url: "/ride/rideHistory",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateRideRequestMutation, useRiderHistoryQuery } = rideApi;
