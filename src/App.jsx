import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";

import { useState } from "react";
import CartProvider from "./store/CartProvider";
import NewMedsProvider from "./store/NewMedsProvider";

import Meds from "./components/Meds/Meds";
import NewMeds from "./components/Meds/NewMeds/NewMeds";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };
  const hideCarthandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <NewMedsProvider>
        {cartIsShown && <Cart onClose={hideCarthandler} />}
        <Header onShow={showCarthandler} />
        <NewMeds />
        <Meds />
      </NewMedsProvider>
    </CartProvider>
  );
}

export default App;
