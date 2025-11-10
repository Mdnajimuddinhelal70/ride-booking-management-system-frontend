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
  }),
});

export const {
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
  useUpdateDriverApprovalMutation,
} = adminApi;
