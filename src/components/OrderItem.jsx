import React, { useContext } from "react";
import "../styles/OrderItem.scss";
import iconClose from "@icons/icon_close.png";
import AppContext from "../context/AppContext";

const OrderItem = ({ title, price, images, id }) => {
  const { removeFromCart } = useContext(AppContext);
  return (
    <div className="OrderItem">
      <figure>
        <img src={images[0]} alt={title} />
      </figure>
      <p>{title}</p>
      <p>{price}</p>
      <img src={iconClose} onClick={() => removeFromCart(id)} alt="close" />
    </div>
  );
};

export default OrderItem;
