import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 const orderAPI =  createApi({
  reducerPath: "orderAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:44307/api/" }),
  tagTypes : ["Orders"],
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST/PUT/DELETE
    createOrder: builder.mutation({
      query: (orderDetails) => ({
        url : "Order",
        method : "POST",
        body : orderDetails
      }),
      
    })
   
   
  }),
});
export const { useCreateOrderMutation
 } = orderAPI;

 export default orderAPI;