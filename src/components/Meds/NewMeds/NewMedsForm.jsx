import {  useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewMedsForm = (prop) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredStockAmount, setEnteredStockAmount] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [isformVisble, setFormVisible] = useState(false);







  const showform = () => {
    setFormVisible(true);
  };
  const CancelHandler = () => {
    setFormVisible(false);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const stockAmountChangeHandler = (event) => {
    setEnteredStockAmount(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const medsData = {
      title: enteredTitle,
      stockAmount: enteredStockAmount,
      price: enteredPrice,
      description: enteredDescription,
      id:uuidv4()
    };
    prop.onSaveData(medsData); //lifting the state
    setEnteredTitle(""); // reseting state to old values
    setEnteredStockAmount("");
    setEnteredPrice("");
    setEnteredDescription("");
  };
  return (
    <div>
      <button
        className="font-bold  text-2xl py-4 px-8 mb-8 border-2  my-3  bg-blue-950 text-white rounded-lg"
        onClick={showform}
      >
        Add New Meds
      </button>
      {isformVisble && (
        <form onSubmit={submitHandler}>
          <div className="flex flex-wrap gap-8 mb-4 text-left px-5">
            <div className="realtive">
              <div>
                <label htmlFor="title" className="   px-1 py-1 font-bold  text-lg text-black ">
                  Title :
                </label>
              </div>

              <input
                
                className="w-96 px-2 py-1 border mt-2 text-black border-gray-300 bg-white rounded-md"
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
                id="title"
              />
            </div>
            <div className="realtive">
              <div>
                <label  htmlFor="stockAmount"className="px-1 py-1 font-bold  text-lg text-black">
                  StockAmount :
                </label>
              </div>

              <input
                type="number"
                className="w-96  px-2 py-1 border mt-2 text-black border-gray-300 bg-white rounded-md"
                value={enteredStockAmount}
                onChange={stockAmountChangeHandler}
                id="stockAmount"
              />
            </div>
            <div className="realtive">
              <div>
                <label htmlFor="price" className="px-1 py-1 font-bold  text-lg text-black">
                  Price :
                </label>
              </div>

              <input
                type="number"
                className="w-96 px-2 py-1 border mt-2 text-black border-gray-300 bg-white rounded-md"
                value={enteredPrice}
                onChange={priceChangeHandler}
                id="price"
              />
            </div>
            <div className="realtive">
              <div>
                <label htmlFor="description" className="px-1 py-1 font-bold  text-lg text-black">
                  Description :
                </label>
              </div>

              <input
                type="text"
                className="w-96 px-2 py-1 border mt-2 text-black border-gray-300 bg-white rounded-md"
                value={enteredDescription}
                onChange={descriptionChangeHandler}
                id="description"
              />
            </div>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="font-semibold py-2 px-3 my-2 border-2 border-blue-900 bg-blue-900 text-white rounded-lg mb-4"
            >
              Add Meds
            </button>
            <button
              type="submit"
              className="font-semibold py-2 px-3  my-2 ml-3 border-2  border-blue-900  bg-blue-900 text-white rounded-lg "
              onClick={CancelHandler}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewMedsForm;
