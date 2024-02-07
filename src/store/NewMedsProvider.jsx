import { useState } from "react";
import NewMedsContext from "./NewMedsContext";

const NewMedsProvider = (props) => {
  const [items, updatedMedsItems] = useState([]);

  const addMedsItemsHandler = (item) => {
    updatedMedsItems((prevItem) => [...prevItem, item]);
  };


  const removeMedsItemsHandler = (item) => {
    updatedMedsItems(() => [ item]);
  };

  const stockItemHandler=(item)=>{
    updatedMedsItems(() => [ item]);
  }

  const medsItems = {
    medsItems:items,
    addMedsItems: addMedsItemsHandler,
    removeMedsItems:removeMedsItemsHandler,
    addItemToStock:stockItemHandler
  };

  return (
    <NewMedsContext.Provider value={medsItems}>
      {props.children}
    </NewMedsContext.Provider>
  );
};

export default NewMedsProvider;
