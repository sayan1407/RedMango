import React, { useState } from 'react'
import { cartItemModel } from '../../../Interface'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Storage/Redux/store'
import { inputHelper } from '../../../Helper'
import { MiniLoader } from '../Common'

function CartPickupDetails() {
    const shoppingCartFromStore : cartItemModel[] = useSelector(
        (state : RootState) => state.shoppingCartStore.cartItems ?? []
      )
    let noOfItems = 0, grandTotal = 0;
    shoppingCartFromStore.map((item) => {
        noOfItems++;
        grandTotal += item.quantity! * item.menuItem?.price!
    })
    const inpupts = {
      name : "",
      email : "",
      phoneNumber : ""
    };
    const [inputData,setinputData] = useState(inpupts);

    const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
      const tempData = inputHelper(e,inputData);
      setinputData(tempData);
    }
    const[loading,setLoading] = useState(false);
    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) =>
    {
      e.preventDefault();
      setLoading(true);
    }
  return (
    
    <div className="border pb-5 pt-3">
    <h1 style={{ fontWeight: "300" }} className="text-center text-success">
      Pickup Details
    </h1>
    <hr />
    <form className="col-10 mx-auto" onSubmit={handleSubmit}>
      <div className="form-group mt-3">
        Pickup Name
        <input
          type="text"
          className="form-control"
          placeholder="name..."
          name="name"
          value={inputData.name}
          onChange={handleInput}
          required
        />
      </div>
      <div className="form-group mt-3">
        Pickup Email
        <input
          type="email"
          className="form-control"
          placeholder="email..."
          name="email"
          value={inputData.email}
          onChange={handleInput}
          required
        />
      </div>

      <div className="form-group mt-3">
        Pickup Phone Number
        <input
          type="number"
          className="form-control"
          placeholder="phone number..."
          name="phoneNumber"
          value={inputData.phoneNumber}
          onChange={handleInput}
          required
        />
      </div>
      <div className="form-group mt-3">
        <div className="card p-3" style={{ background: "ghostwhite" }}>
          <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
          <h5>No of items : {noOfItems}</h5>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-lg btn-success form-control mt-3"
      >
        {loading ? <MiniLoader/> : "Looks Good? Place Order!"}
        
      </button>
    </form>
  </div>
  )
}

export default CartPickupDetails