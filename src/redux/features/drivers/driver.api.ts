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

    getRideById: builder.query({
      query: (id) => ({
        url: `/driver/${id}`,
        method: "GET",
      }),
      providesTags: ["DRIVER"],
    }),

    updateRideStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/ride/${id}/status`,
        method: "PATCH",
        data: status,
      }),
      invalidatesTags: ["RIDES"],
    }),

    updateAvailability: builder.mutation({
      query: (availability) => ({
        url: "/driver/availability",
        method: "PATCH",
        data: availability,
      }),
      invalidatesTags: ["DRIVER"],
    }),

    getActiveRide: builder.query({
      query: () => ({
        url: "/ride/active-ride",
        method: "GET",
      }),
      providesTags: ["RIDES"],
    }),
  }),
});

export const {
  useUpdateAvailabilityMutation,
  useGetPendingRidesQuery,
  useGetActiveRideQuery,
  useGetRideByIdQuery,
  useUpdateRideStatusMutation,
} = driverApi;
