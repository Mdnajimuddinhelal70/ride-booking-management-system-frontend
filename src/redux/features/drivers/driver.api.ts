import { baseApi } from "@/redux/baseApi";

const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPendingRides: builder.query({
      query: (getRides) => ({
        url: "/driver/requested",
        method: "GET",
        data: getRides,
      }),
      providesTags: ["RIDES"],
    }),

    updateAvailability: builder.mutation({
      query: (availability) => ({
        url: "/driver/availability",
        method: "PATCH",
        data: availability,
      }),
      invalidatesTags: ["DRIVER"],
    }),
  }),
});

export const { useUpdateAvailabilityMutation, useGetPendingRidesQuery } =
  driverApi;
