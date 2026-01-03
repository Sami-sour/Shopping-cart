import React, { useContext, useState } from "react";
import { CartStoreItems } from "../../store/CartStoreContext";

const CartLayout = ({ item }) => {
  const { deleteCart, handleAddButtton, count, handleMinusButton } = useContext(CartStoreItems);


  


  return (
    <>
      <div className="cart-layout">
        <div className="laptop-img">
          <img src={item.image} alt="images" className="laptop" />
        </div>

        <div className="main-info">
          <div className="information">
            <div className="cart-title">{item.title}</div>
          </div>
          <div className="cart-item-catagory">{item.category}</div>
          <div className="item-price">${item.price}</div>
          <div className="add-delete-items">
            <div className="minue-btn">
              <button className="minus" onClick={handleMinusButton}>
                &minus;
              </button>
            </div>
            <span>{count}</span>
            <div className="add-btn">
              <button className="add" onClick={handleAddButtton}>
                &#43;
              </button>
            </div>
          </div>

          <div className="btn">
            <button className="remove-btn" onClick={() => deleteCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartLayout;
