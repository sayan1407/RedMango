import React, { useEffect } from "react";
import { Footer, Header } from "../Components/Layout";
import { Routes, Route } from "react-router-dom";
import { Home, MenuItemDetails, NotFound } from "../Pages";
import { useDispatch } from "react-redux";
import { useGetShoppingCartQuery } from "../Apis/ShoppingCartApi";
import { setCartItem } from "../Storage/Redux/shoppingCartSlice";

function App() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetShoppingCartQuery(
    "99c41421-020f-4e6b-b9de-afc6052f8d43"
  );
  useEffect(() => {
    if (!isLoading) {
      console.log(data);
      dispatch(setCartItem(data.result?.cartItems));
    }
  }, [isLoading]);
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
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
