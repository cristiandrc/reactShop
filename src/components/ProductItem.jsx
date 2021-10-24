import React, { useState } from "react";
import "../styles/ProductItem.scss";
import addedToCard from "@icons/bt_added_to_cart.svg";

const ProductItem = ({ images, title, price }) => {
  const [cart, setCart] = useState([]);
  const handleCart = () => {
    setCart([]);
  };

  return (
    <div className="ProductItem">
      <img src={images[0]} alt={title} />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleCart()}>
          <img src={addedToCard} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
