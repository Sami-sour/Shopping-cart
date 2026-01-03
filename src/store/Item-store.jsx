import { useEffect, useState } from "react";
import { CartStoreItems } from "./CartStoreContext";

const DEFAULT_VALUE = [];

const CartStoreProvider = ({ children }) => {
  const [cart, setCart] = useState(DEFAULT_VALUE);
  const [products, setProducts] = useState([]);
  const [priceDetails, setPriceDEtails] = useState([]);
    const [count, setCount] = useState(1);
    // const [doublePrice, setItemPrice] = useState(item.price);
    

    
  const handleAddButtton = () => {
    setCount(count + 1);
    // setItemPrice(doublePrice ** 2);
    newDoublePrice();
    
  };

  
  const handleMinusButton = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const deleteCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    setPriceDEtails((prev) => prev.filter((item) => item.id !== id));
  };

  const AddToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setPriceDEtails((prev) => [...prev, item]);
    console.log(item);
  };

  const searchCart = () => {};

  return (
    <>
      <CartStoreItems.Provider
        value={{
          products,
          cart,
          count,
          priceDetails,
          handleAddButtton,
          handleMinusButton,
          setCount,
          deleteCart,
          AddToCart,
          searchCart,
        }}
      >
        {children}
      </CartStoreItems.Provider>
    </>
  );
};

export default CartStoreProvider;
