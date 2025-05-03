import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 const paymentAPI =  createApi({
  reducerPath: "paymentAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:44307/api/" }),
  tagTypes : ["Payments"],
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST/PUT/DELETE
    initiatePayment: builder.mutation({
      query: (userID) => ({
        url : "Payment",
        method : "POST",
        params : {
          userId : userID
        }
      }),
      
    })
   
   
  }),
});
export const { useInitiatePaymentMutation
 } = paymentAPI;

 export default paymentAPI;