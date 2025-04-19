import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "../../Pages";
import { cartItemModel } from "../../Interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Storage/Redux/store";
import userModel from "../../Interface/userModel";
import { setLoggedInUser } from "../../Storage/Redux/userAuthSlice";
import jwt_decode from "jwt-decode";


let logo = require("../../Assets/Images/mango.png");

function Header() {
  const shoppingCartFromStore: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );
  const userFromStore: userModel = useSelector(
    (state: RootState) => state.userAuthStore
  );
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch(
      setLoggedInUser({
        id: "",
        fullName: "",
        email: "",
        role: "",
      })
    );
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const { fullName, id, email, role }: userModel = jwt_decode(token);
      dispatch(
        setLoggedInUser({
          fullName,
          id,
          email,
          role,
        })
      );
    }
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className="container-fluid">
          <NavLink to="/">
            <img src={logo} style={{ height: "40px" }} className="m-1" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/shoppingCart"
                >
                  <i className="bi bi-cart">
                    {shoppingCartFromStore.length > 0
                      ? ` (${shoppingCartFromStore.length}) `
                      : ""}
                  </i>
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin Panel
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <div className="d-flex" style={{ marginLeft: "auto" }}>
                {userFromStore.id && (
                  <>
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        style={{
                          cursor: "pointer",
                          background: "transparent",
                          border: 0,
                        }}
                      >
                        Welcome, {userFromStore.fullName}
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="btn btn-success btn-outlined rounded-pill text-white mx-2"
                        style={{
                          border: "none",
                          height: "40px",
                          width: "100px",
                        }}
                        onClick={handleLogOut}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                )}
                {!userFromStore.id && (
                  <>
                    <li className="nav-item text-white">
                      <NavLink className="nav-link" to="/register">
                        Register
                      </NavLink>
                    </li>
                    <li className="nav-item text-white">
                      <NavLink
                        className="btn btn-success btn-outlined rounded-pill text-white mx-2"
                        style={{
                          border: "none",
                          height: "40px",
                          width: "100px",
                        }}
                        to="/login"
                      >
                        Login
                      </NavLink>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;


