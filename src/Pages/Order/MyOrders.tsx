import React from 'react'
import { useGetOrdersQuery } from '../../Apis/OrderApi'
import { userAuthlice } from '../../Storage/Redux/userAuthSlice'
import userModel from '../../Interface/userModel';
import { useSelector } from 'react-redux';
import { RootState } from '../../Storage/Redux/store';
import MainLoader from '../../Components/Page/Common/MainLoader';
import { orderHeader } from '../../Interface';

function MyOrders() {
     const loggedInUser : userModel = useSelector((store : RootState) => store.userAuthStore);
    const {data,isLoading} = useGetOrdersQuery(loggedInUser.id)
    console.log(data?.result);
  return (
    <div>
    {isLoading ? (<div>
        <MainLoader/>
    </div>) : (
    <div className="table p-5">
      <h1 className="text-success">Orders List</h1>
      <div className="p-2">
        <div className="row border">
          <div className="col-1">ID</div>
          <div className="col-3">Name</div>
          <div className="col-2">Phone</div>
          <div className="col-1">Total</div>
          <div className="col-1">Items</div>
          <div className="col-2">Date</div>
          <div className="col-2"></div>
        </div>
        {data?.result?.map((item : orderHeader,index : number) => (
            <div className="row border" key={index}>
          <div className="col-1">{item.orderHeaderId}</div>
          <div className="col-3">{item.pickupName}</div>
          <div className="col-2">{item.pickupPhoneNumber}</div>
          <div className="col-1">{item.orderTotal}</div>
          <div className="col-1">{item.totalItems}</div>
          <div className="col-2">{new Date(item.orderDate).toLocaleDateString('en-US')}</div>
          <div className="col-2">
            <button className="btn btn-success">Details</button>
          </div>
        </div>

        ))}
        
      </div>
    </div>
    )}
    </div>
     
  )
}

export default MyOrders