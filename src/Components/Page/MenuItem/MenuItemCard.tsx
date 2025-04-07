import React, { useState } from "react";
import { menuItemModel } from "../../../Interface";
import { Link } from "react-router-dom";
import { useUpdateShoppingCartMutation } from "../../../Apis/ShoppingCartApi";

interface Props {
  menuItem: menuItemModel;
}

function MenuItemCard(props: Props) {
  const [addToCart] = useUpdateShoppingCartMutation();
  const [isCartUpdating, setIsCartUpdating] = useState(false);
  let imageUrl = require("../../../Assets/Images/".concat(
    props.menuItem.image
  ));
  const handleAddToCart = async () => {
    setIsCartUpdating(true);
    await addToCart({
      userId: "99c41421-020f-4e6b-b9de-afc6052f8d43",
      menuItemId: props.menuItem.id,
      updateQuantityBy: 1,
    });
    setIsCartUpdating(false);
  };
  return (
    <div className="col-md-4 col-12 p-4">
      <div
        className="card"
        style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}
      >
        <div className="card-body pt-2">
          <div className="row col-10 offset-1 p-4">
            <Link to={`/menuItemDetails/${props.menuItem.id}`}>
              <img
                src={imageUrl}
                style={{ borderRadius: "50%" }}
                alt=""
                className="w-100 mt-5 image-box"
              />
            </Link>
          </div>
          {props.menuItem.specialTag &&
            props.menuItem.specialTag.length > 0 && (
              <i
                className="bi bi-star btn btn-success"
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                  padding: "5px 10px",
                  borderRadius: "3px",
                  outline: "none !important",
                  cursor: "pointer",
                }}
              >
                &nbsp; SPECIAL
              </i>
            )}

          {isCartUpdating ? (
            <div
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
              }}
            >
              <div
                className={"spinner-border text-warning"}
                style={{ scale: "100%" }}
              ></div>
            </div>
          ) : (
            <i
              className="bi bi-cart-plus btn btn-outline-danger"
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                padding: "5px 10px",
                borderRadius: "3px",
                outline: "none !important",
                cursor: "pointer",
              }}
              onClick={() => handleAddToCart()}
            ></i>
          )}

          <div className="text-center">
            <p className="card-title m-0 text-success fs-3">
              <Link
                to={`/menuItemDetails/${props.menuItem.id}`}
                style={{ textDecoration: "none" }}
              >
                {props.menuItem.name}
              </Link>
            </p>
            <p className="badge bg-secondary" style={{ fontSize: "12px" }}>
              {props.menuItem.category}
            </p>
          </div>
          <p className="card-text" style={{ textAlign: "center" }}>
            {props.menuItem.description}
          </p>
          <div className="row text-center">
            <h4>{props.menuItem.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;
