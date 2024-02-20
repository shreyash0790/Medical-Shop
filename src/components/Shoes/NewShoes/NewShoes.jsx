import { useContext } from "react";
import NewShoeForm from "./NewShoeForm";
import NewShoeContext from "../../../store/NewShoeContext";

const NewShoes = () => {
  const shoeCnxt = useContext(NewShoeContext);

  const shoeDataHandler = (medsData) => {
    shoeCnxt.addShoeItems(medsData);
  };

  return (
    <div className="bg-cyan-600 px-2 py-2  mx-auto mt-16 rounded-lg shadow-md text-center sm:max-w-2xl md:w-1/2">
      <NewShoeForm onSaveData={shoeDataHandler} />
    </div>
  );
};

export default NewShoes;
