import React from 'react'
import { cartItemModel, menuItemModel } from '../../../Interface';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Storage/Redux/store';
import { deleteFromCart, updateQuantity } from '../../../Storage/Redux/shoppingCartSlice';
import { useUpdateShoppingCartMutation } from '../../../Apis/ShoppingCartApi';
import userModel from '../../../Interface/userModel';
import { log } from 'console';

function CartSummary() {
  const shoppingCartFromStore : cartItemModel[] = useSelector(
    (state : RootState) => state.shoppingCartStore.cartItems ?? []
  )
  const dispatch = useDispatch();
   const [addToCart] = useUpdateShoppingCartMutation();
  let imageUrl = "../../../Assets/Images/";
  const loggedInUser : userModel = useSelector((store : RootState) => store.userAuthStore);
  
  const handleQuantity = async (updateQuantityBy : number,cartItem : cartItemModel) => {

            let updatedQuantity = cartItem.quantity! + updateQuantityBy
           if((updateQuantityBy === -1 && cartItem.quantity === 1) || updateQuantityBy === 0)
           {
            
            dispatch(deleteFromCart({id : cartItem.id}));
            await addToCart({
              userId: loggedInUser.id,
              menuItemId: cartItem.menuItem?.id,
              updateQuantityBy: -cartItem.quantity!,
            });
  
           
           }
           else{
          
            dispatch(updateQuantity({id : cartItem.id, quantity : updatedQuantity}))
            await addToCart({
              userId: loggedInUser.id,
              menuItemId: cartItem.menuItem?.id,
              updateQuantityBy: updateQuantityBy,
            });
  
           }
           console.log(cartItem.menuItem?.id)
           
  }
  if(!shoppingCartFromStore)
  {
    return (<div>
         No Cart Item
    </div>)
  }
  return (
    <div>
     {shoppingCartFromStore.map((cartItem,index) => (
        
          <div className="container p-4 m-2">
          <h4 className="text-center text-success">Cart Summary</h4>
          <div
            className="d-flex flex-sm-row flex-column align-items-center custom-card-shadow rounded m-3"
            style={{ background: "ghostwhite" }}
          >
            <div className="p-3">
              <img
                src={require("../../../Assets/Images/".concat(cartItem.menuItem!.image))}
                alt=""
                width={"120px"}
                className="rounded-circle"
              />
            </div>
    
            <div className="p-2 mx-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h4 style={{ fontWeight: 300 }}>{cartItem.menuItem!.name}</h4>
                <h4>{cartItem.menuItem!.price * cartItem.quantity!}</h4>
              </div>
              <div className="flex-fill">
                <h4 className="text-danger">{cartItem.menuItem!.price}</h4>
              </div>
              <div className="d-flex justify-content-between">
                <div
                  className="d-flex justify-content-between p-2 mt-2 rounded-pill custom-card-shadow  "
                  style={{
                    width: "100px",
                    height: "43px",
                  }}
                >
                  <span style={{ color: "rgba(22,22,22,.7)" }} role="button">
                    <i className="bi bi-dash-circle-fill" onClick={() => handleQuantity(-1,cartItem)}></i>
                  </span>
                  <span>
                    <b>{cartItem.quantity}</b>
                  </span>
                  <span style={{ color: "rgba(22,22,22,.7)" }} role="button">
                    <i className="bi bi-plus-circle-fill" onClick={() => handleQuantity(1,cartItem)}></i>
                  </span>
                </div>
    
                <button className="btn btn-danger mx-1" onClick={() => handleQuantity(0,cartItem)}>Remove</button>
              </div>
            </div>
          </div>
        </div>
     ))}
    </div>
  )
}

export default CartSummary;