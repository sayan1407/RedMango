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
      invalidatesTags: ["Orders"]
      }),
    getOrders: builder.query({
      query : (userId) => ({
        url: "Order",
        method: "GET",
        params: {
          userID : userId
        }
        
      }),
      providesTags: ["Orders"]
    }),
    getOrdersById: builder.query({
      query : (id) => ({
        url: `Order/${id}`,
        method: "GET",
        
      }),
      providesTags: ["Orders"]
    })
      
    
   
   
  }),
});
export const { useCreateOrderMutation,useGetOrdersQuery,useGetOrdersByIdQuery
 } = orderAPI;

 export default orderAPI;