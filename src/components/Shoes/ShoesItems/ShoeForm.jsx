import { useContext } from "react";
import MedsFormInput from "../../UI/ShoeFormInput";
import CartContext from "../../../store/CartContext";
import NewShoeContext from "../../../store/NewShoeContext";

const ShoeForm = function (props) {
  const cartCnxt = useContext(CartContext);
  const shoeCnxt = useContext(NewShoeContext);

  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount_" + props.id).value;
    cartCnxt.addItems({ ...props.items, Quantity: quantity });

    const modifiedItem = {
      ...props.items,
      stockAmount:
        props.items.stockAmount - quantity <= 0
          ? <span className=" inline-block  text-red-900  " >Out of Stock!</span>
          : props.items.stockAmount - quantity,
    };

    shoeCnxt.removeShoeItems(modifiedItem);
  };

  return (
    <form className="text-right">
      <MedsFormInput
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button
        type="button"
        className="mt-4 rounded-lg bg-blue-800 px-4 py-1 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={addItemToCart}
      >
        + Add
      </button>
    </form>
  );
};

export default ShoeForm;
