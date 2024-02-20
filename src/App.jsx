import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";

import { useState } from "react";
import CartProvider from "./store/CartProvider";
import NewShoeProvider from "./store/NewShoeProvider";

import Shoes from "./components/Shoes/Shoes";

import NewShoes from "./components/Shoes/NewShoes/NewShoes";

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
      <NewShoeProvider>
        {cartIsShown && <Cart onClose={hideCarthandler} />}
        <Header onShow={showCarthandler} />
        <NewShoes />
        <Shoes />
      </NewShoeProvider>
    </CartProvider>
  );
}

export default App;
