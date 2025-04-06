import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 const shoppingCartAPI = createApi({
  reducerPath: "shoppingCartAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:44307/api/" }),
  tagTypes : ["ShoppingCarts"],
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST/PUT/DELETE
    getShoppingCart: builder.query({
      query: (userID) => ({
        url : "ShoppingCart",
        method : "GET",
        params : { userID }
      }),
      
      providesTags : ["ShoppingCarts"]
    }),
    updateShoppingCart: builder.query({
        query: ({userId,menuItemId,updateQuantityBy}) => ({
          url : `ShoppingCart`,
          method : "POST",
          params : {userId,menuItemId,updateQuantityBy}
        }),
        invalidatesTags : ["ShoppingCarts"]
      })
     
  }),
});
export const { useGetShoppingCartQuery, useUpdateShoppingCartMutation
 } = shoppingCartAPI;

 export default shoppingCartAPI;