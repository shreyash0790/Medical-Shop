import { useState } from "react";
import NewShoeContext from "./NewShoeContext";

const NewShoeProvider = (props) => {
  const [items, updatedShoeItems] = useState([]);

  const addShoeItemsHandler = (item) => {
    updatedShoeItems((prevItem) => [...prevItem, item]);
  };


  const removeShoeItemsHandler = (item) => {
    updatedShoeItems(() => [ item]);
  };

  const stockItemHandler=(item)=>{
    updatedShoeItems(() => [ item]);
  }

  const shoeItems = {
    shoeItems:items,
    addShoeItems: addShoeItemsHandler,
    removeShoeItems:removeShoeItemsHandler,
    addItemToStock:stockItemHandler
  };

  return (
    <NewShoeContext.Provider value={shoeItems}>
      {props.children}
    </NewShoeContext.Provider>
  );
};

export default NewShoeProvider;
