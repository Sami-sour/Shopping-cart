import React, { useContext } from "react";
import { CartStoreItems } from "../../store/CartStoreContext";

const TotalPriceAmount = () => {
  const { priceDetails } = useContext(CartStoreItems);

  const newTotal = priceDetails.reduce((acc, item) => acc + item.price, 0);

  

  return (
    <>
      <hr />

      <div className="total">
        <div className="total-price">Total Amount</div>
        <div className="total-amount">${newTotal}</div>
      </div>
    </>
  );
};

export default TotalPriceAmount;
