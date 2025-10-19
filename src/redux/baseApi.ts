import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),

  //! If you don't use axios then you can use like this----->
  // baseQuery: fetchBaseQuery({
  //   baseUrl: config.baseUrl,
  //   credentials: "include",
  // }),
  tagTypes: ["USER"],
  endpoints: () => ({}),
});
