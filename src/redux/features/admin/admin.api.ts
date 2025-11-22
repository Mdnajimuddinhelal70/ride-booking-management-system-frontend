import { baseApi } from "@/redux/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (params) => ({
        url: "/admin/users",
        method: "GET",
        params,
      }),
      providesTags: ["AdminUsers"],
    }),
    updateUserStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/admin/user/${id}/status`,
        method: "PATCH",
        data: { status },
      }),
      invalidatesTags: ["AdminUsers"],
    }),

    updateDriverApproval: builder.mutation({
      query: ({ id, approvalStatus }) => ({
        url: `/admin/driver/${id}/approval`,
        method: "PATCH",
        data: { approvalStatus },
      }),
      invalidatesTags: ["AdminUsers"],
    }),
    getAllRides: builder.query({
      query: (filters) => ({
        url: "/admin/all",
        method: "GET",
        params: filters,
      }),
      providesTags: ["AdminUsers"],
    }),

    getSummary: builder.query({
      query: ({ startDate, endDate }) => ({
        url: `/admin/summary`,
        params: { startDate, endDate },
      }),
      providesTags: ["Analytics"],
    }),

    getTrends: builder.query({
      query: ({ metric, groupBy, startDate, endDate }) => ({
        url: `/admin/trends`,
        params: { metric, groupBy, startDate, endDate },
      }),
      providesTags: ["Analytics"],
    }),

    getTopDrivers: builder.query({
      query: ({ startDate, endDate, limit }) => ({
        url: `/admin/top-drivers`,
        params: { startDate, endDate, limit },
      }),
      providesTags: ["Analytics"],
    }),
    getAdminUsers: builder.query({
      query: (params) => ({
        url: `/admin/users`,
        params,
      }),
      providesTags: ["RIDES"],
    }),
    updateAdminProfile: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/${id}/profile`,
        method: "PUT",
        data: data,
      }),
      invalidatesTags: ["USER"],
    }),

    updateAdminChangePassword: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/${id}/change-password`,
        method: "PUT",
        data: data,
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
  useUpdateDriverApprovalMutation,
  useGetAllRidesQuery,
  useGetSummaryQuery,
  useGetTrendsQuery,
  useGetTopDriversQuery,
  useGetAdminUsersQuery,
  useUpdateAdminProfileMutation,
  useUpdateAdminChangePasswordMutation,
} = adminApi;
