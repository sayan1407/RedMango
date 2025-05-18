import React from 'react'
import { useGetOrdersQuery } from '../../Apis/OrderApi'
import { userAuthlice } from '../../Storage/Redux/userAuthSlice'
import userModel from '../../Interface/userModel';
import { useSelector } from 'react-redux';
import { RootState } from '../../Storage/Redux/store';
import MainLoader from '../../Components/Page/Common/MainLoader';
import { orderHeader } from '../../Interface';
import { OrderList } from '../../Components/Page/Order';

function MyOrders() {
     const loggedInUser : userModel = useSelector((store : RootState) => store.userAuthStore);
    const {data,isLoading} = useGetOrdersQuery(loggedInUser.id)
    console.log(data?.result);
  return (
    <div>
       <OrderList isLoading = {isLoading} orderHeaderList = {data?.result} />
    </div>
     
  )
}

export default MyOrders