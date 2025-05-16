import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 const orderAPI =  createApi({
  reducerPath: "orderAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:44307/api/" }),
  tagTypes : ["Payments"],
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST/PUT/DELETE
    initiatePayment: builder.mutation({
      query: (orderDetails) => ({
        url : "Order",
        method : "POST",
        body : orderDetails
      }),
      
    })
   
   
  }),
});
export const { useInitiatePaymentMutation
 } = orderAPI;

 export default orderAPI;