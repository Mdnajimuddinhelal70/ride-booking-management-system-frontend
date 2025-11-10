import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),

  tagTypes: ["USER", "DRIVER", "RIDES", "AdminUsers"],
  endpoints: () => ({}),
});

//! If you don't use axios then you can use like this----->
// baseQuery: fetchBaseQuery({
//   baseUrl: config.baseUrl,
//   credentials: "include",
// }),
