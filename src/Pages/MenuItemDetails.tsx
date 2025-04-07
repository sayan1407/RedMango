import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetMenuItemByIdQuery } from '../Apis/MenuItemApi';
import { useUpdateShoppingCartMutation } from '../Apis/ShoppingCartApi';

function MenuItemDetails() {
  const {menuItemId} = useParams();
  const {data,isLoading} = useGetMenuItemByIdQuery(menuItemId);
  const navigate = useNavigate();
  const [quantity,setQuantity] = useState(1);
  const [isCartUpdating,setIsCartUpdating] = useState(false);
  const[addToCart] = useUpdateShoppingCartMutation();

  const handleAddToCart = () => {
    setIsCartUpdating(true);
    addToCart({
     userId : "99c41421-020f-4e6b-b9de-afc6052f8d43",
     menuItemId : menuItemId,
     updateQuantityBy: quantity
    })
    setIsCartUpdating(false);
  }
  const handleQuantityChange = (counter : number) => {
    let newQuantity = quantity + counter;
     if(newQuantity < 0)
       newQuantity = 0;
     setQuantity(newQuantity)
  }
  if(isLoading)
  {
    return(
      <div>Loading...</div>
    )
  }
  else{
    console.log(data)
    let imageUrl = require("../Assets/Images/".concat(data.result.image))
  return (
    <div className="container pt-4 pt-md-5">
    <div className="row">
      <div className="col-7">
        <h2 className="text-success">{data.result.name}</h2>
        <span>
          <span
            className="badge text-bg-dark pt-2"
            style={{ height: "40px", fontSize: "20px" }}
          >
            {data.result.category}
          </span>
        </span>
        <span>
          <span
            className="badge text-bg-light pt-2"
            style={{ height: "40px", fontSize: "20px" }}
          >
            {data.result.specialTag}
          </span>
        </span>
        <p style={{ fontSize: "20px" }} className="pt-2">
          {data.result.description}
        </p>
        <span className="h3">{data.result.price}</span> &nbsp;&nbsp;&nbsp;
        <span
          className="pb-2  p-3"
          style={{ border: "1px solid #333", borderRadius: "30px" }}
        >
          <i
            className="bi bi-dash p-1"
            style={{ fontSize: "25px", cursor: "pointer" }}
            onClick={() => handleQuantityChange(-1)}
          ></i>
          <span className="h3 mt-3 px-3">{quantity}</span>
          <i
            className="bi bi-plus p-1"
            style={{ fontSize: "25px", cursor: "pointer" }}
            onClick={() => handleQuantityChange(1)}
          ></i>
        </span>
        <div className="row pt-4">
          <div className="col-5">
            <button className="btn btn-success form-control"
            onClick={() => handleAddToCart()}>
              Add to Cart
            </button>
          </div>

          <div className="col-5 ">
            <button className="btn btn-secondary form-control"
            onClick={() => navigate(-1)}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
      <div className="col-5">
        <img
          src={imageUrl}
          width="100%"
          style={{ borderRadius: "50%" }}
          alt="No content"
        ></img>
      </div>
    </div>
  </div>
  )
}
}

export default MenuItemDetails