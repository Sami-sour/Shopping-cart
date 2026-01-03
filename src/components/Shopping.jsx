import React, { useContext, useState } from "react";
import { CartStoreItems } from "../store/CartStoreContext";

const Shopping = ({ item }) => {
  const { AddToCart , cart} = useContext(CartStoreItems);

  if (!item) return null;

  const isAdded = cart.some((cartItem) => cartItem.id === item.id);

  return (
    <>
      <div className="main-card-container">
        <div className="card-container">
          <div className="image">
            <img src={item.image || ""} alt={item.title || "item"} />
          </div>
          <div className="category">{item.category}</div>
          <div className="title">{item.title}</div>
          <div className="rate">
            <div className="price">Price: ${item.price}</div>
            <div className="rating">Rate: {item.rating.rate}</div>
          </div>

          <div className="buttons">
            <div className="cart">
              <button className="cart-btn" onClick={() => AddToCart(item)}
                disabled={isAdded}>
                { isAdded ? "Added" : "Cart"}
              </button>
            </div>
            <div className="buy">
              <button className="buy-btn">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopping;
