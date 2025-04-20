import React, { useEffect } from "react";
import { Footer, Header } from "../Components/Layout";
import { Routes, Route } from "react-router-dom";
import { AccessDenied, AdminAuthentication, Home, Login, MenuItemDetails, NotFound, Register, ShoppingCart } from "../Pages";
import { useDispatch, useSelector } from "react-redux";
import { useGetShoppingCartQuery } from "../Apis/ShoppingCartApi";
import { setCartItem } from "../Storage/Redux/shoppingCartSlice";
import userModel from "../Interface/userModel";
import { RootState } from "../Storage/Redux/store";

function App() {
  const dispatch = useDispatch();
  const loggedInUser : userModel = useSelector((store : RootState) => store.userAuthStore);
  
  const { data, isLoading } = useGetShoppingCartQuery(
    loggedInUser.id,
  );
  useEffect(() => {
    if (!isLoading) {
      console.log(data);
      dispatch(setCartItem(data.result?.cartItems));
    }
  }, [data]);
  return (
    <div className="text-primary">
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetails />}
          ></Route>
          <Route path="/shoppingCart" element={<ShoppingCart/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/accessDenied" element={<AccessDenied/>}></Route>
          <Route path="/adminAuthentication" element={<AdminAuthentication/>}></Route>

        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
