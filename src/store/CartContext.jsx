import React from "react";

const CartContext = React.createContext({
  items: [],
  addItems: () => {},
  removeItems: () => {},
});

export default CartContext;
