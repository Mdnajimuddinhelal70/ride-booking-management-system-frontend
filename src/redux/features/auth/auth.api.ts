import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Register
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),

    // ✅ Login
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),

    // ✅ Logout
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),

    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useUserInfoQuery,
} = authApi;

// import { baseApi } from "@/redux/baseApi";

// export const authApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     // 🟢 Login
//     login: builder.mutation({
//       query: (userInfo) => ({
//         url: "/auth/login",
//         method: "POST",
//         data: userInfo,
//         withCredentials: true, // cookie enable
//       }),
//     }),

//     // 🔵 Logout
//     logout: builder.mutation({
//       query: () => ({
//         url: "/auth/logout",
//         method: "POST",
//         withCredentials: true, // cookie clear করার জন্য
//       }),
//     }),

//     // 🟣 Register
//     register: builder.mutation({
//       query: (userInfo) => ({
//         url: "/user/register",
//         method: "POST",
//         data: userInfo,
//       }),
//     }),

//     // 🟡 Logged-in user info
//     userInfo: builder.query({
//       query: () => ({
//         url: "/auth/me",
//         method: "GET",
//         withCredentials: true, // cookie থেকে ইউজার তথ্য আনবে
//       }),
//     }),
//   }),
// });

// export const {
//   useRegisterMutation,
//   useLoginMutation,
//   useLogoutMutation,
//   useUserInfoQuery,
// } = authApi;
