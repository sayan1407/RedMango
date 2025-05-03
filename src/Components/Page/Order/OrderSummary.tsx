import React from 'react'
import orderSummaryProps from './orderSummeryProps'

function OrderSummary({data,userData} : orderSummaryProps) {
  return (
    <div>
   
      <h3 className="text-success">Order Summary</h3>
      <div className="mt-3">
        <div className="border py-3 px-2">Name : {userData.name} </div>
        <div className="border py-3 px-2">Email : {userData.email}</div>
        <div className="border py-3 px-2">Phone : {userData.phoneNumber}</div>
        <div className="border py-3 px-2">
          <h4 className="text-success">Menu Items</h4>
          <div className="p-3">
            
            {data.cartItems.map((item,index) => (
                <div className="d-flex">
              <div className="d-flex w-100 justify-content-between">
                
                    
                        <p>{item.menuItem?.name}</p>
                        <p>${item.menuItem?.price} x {item.quantity} = </p>
                   
               
                
              </div>
              <p style={{ width: "70px", textAlign: "right" }}>{item.menuItem?.price! * item.quantity!}</p>
              </div>
            ))}
            
            <hr />
            <h4 className="text-danger" style={{ textAlign: "right" }}>
              {data.cartTotal}
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary