import { createContext } from "react";

const StoreValue = {
  count: 1,
  setCount: () => {},
  deleteCart: () => {},
  addToCart: () => {},
  products: [],
  handleAddButtton: () => {},
  handleMinusButton: () => {},
  searchPost: () => {},
};

export const CartStoreItems = createContext(StoreValue);
