import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 const menuItemAPI = createApi({
  reducerPath: "menuItemAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:44307/api/" }),
  tagTypes : ["MenuItems"],
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST/PUT/DELETE
    getMenuItems: builder.query({
      query: () => ({
        url : "MenuItem",
        method : "GET",
        params : {}
      }),
      
      providesTags : ["MenuItems"]
    }),
    getMenuItemById: builder.query({
        query: (id) => ({
          url : `MenuItem/${id}`,
          method : "GET",
          params : {}
        }),
        
      })
   
  }),
});
export const { useGetMenuItemsQuery, useGetMenuItemByIdQuery
 } = menuItemAPI;

 export default menuItemAPI;