import React from "react";

const NewMedsContext = React.createContext({
  medsItems: [],
  addMedsItems: () => {},
  removeMedsItems:()=>{},
  addItemToStock:()=>{}
});

export default NewMedsContext;
