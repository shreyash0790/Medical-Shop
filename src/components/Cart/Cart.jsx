/* eslint-disable react/prop-types */
import Modal from "../UI/Modal";
import { Fragment, useContext } from "react";
import CartContext from "../../store/CartContext";
import NewMedsContext from "../../store/NewMedsContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;
  const medsCtx = useContext(NewMedsContext);

  const removeItemHandler = (items) => {
    const foundItem = medsCtx.medsItems.filter((item) => items.id === item.id);
    const foundItems = foundItem[0];

    const modifiedItem = {
      ...foundItems,
      stockAmount:
        foundItems.stockAmount.props.children === "Out of Stock!"
          ? items.Quantity
          : parseInt(foundItem.stockAmount) + parseInt(items.Quantity),
    };

    cartCtx.removeItems(items.id);

    medsCtx.addItemToStock(modifiedItem); // from cart to stock

  };

  const totalPrice = cartItems.reduce((curr, item) => {
    let totalprice = parseInt(
      item.price.replace(/[^0-9]+/g, "") * item.Quantity
    );
    return curr + totalprice;
  }, 0);

  return (
    <Fragment>
      <Modal OnClose={props.OnClose}>
        <ul className="flex flex-col divide-y divide-gray-200">
          {cartItems.map((items) => (
            <li
              key={items.id}
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <div className="flex w-full flex-col justify-between pb-4">
                  <div className="flex w-full justify-between space-x-2 pb-2">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-black leading-snug sm:pr-8">
                        {items.title}
                      </h3>
                      <p className="text-sm text-black">x{items.Quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-black ">
                        {items.price}
                      </p>
                      <button
                        type="button"
                        className="rounded-full border bg-blue-900 mt-3 px-2 py-1 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={() => removeItemHandler(items)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="space-y-1 text-right text-black pb-5">
          <p>
            Total Price:
            <span className="font-semibold"> ₹{totalPrice}</span>
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="rounded-full border border-blue-900 px-5 py-1 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={props.onClose}
          >
            Back to shop
          </button>
          <button
            type="button"
            className="rounded-full border  bg-blue-950 px-5 py-1 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Order
          </button>
        </div>
      </Modal>
    </Fragment>
  );
};
export default Cart;
