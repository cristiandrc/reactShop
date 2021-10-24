import React, { useContext } from "react";
import "../styles/ProductItem.scss";
import addToCardImage from "@icons/bt_add_to_cart.svg";
import AppContext from "../context/AppContext";

const ProductItem = (props) => {
  const { images, title, price } = props;
  const { addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={images[0]} alt={title} />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleCart(props)}>
          <img src={addToCardImage} alt="add cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
