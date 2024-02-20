import React from "react";

const NewShoeContext = React.createContext({
  shoeItems: [],
  addShoeItems: () => {},
  removeShoeItems:()=>{},
  addItemToStock:()=>{}
});

export default NewShoeContext;
