import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, image, rating }) => {
  const [state, dispatch] = useStateValue();
  console.log(state);

  const AddToBasket = () => {
    dispatch({
      type: "ADD",
      item: {
        id: id,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p>{title}</p>

          <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>

        <img src={image} alt="product" />

        <button onClick={AddToBasket}>Add to Basket</button>
      </div>
    </div>
  );
};
export default Product;
