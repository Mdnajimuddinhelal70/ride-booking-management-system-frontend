import { baseApi } from "@/redux/baseApi";

const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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

export const { useUpdateAvailabilityMutation } = driverApi;
