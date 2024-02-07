import { useContext } from "react";
import NewMedsForm from "./NewMedsForm";
import NewMedsContext from "../../../store/NewMedsContext";

const NewMeds = () => {
  const medsCnxt = useContext(NewMedsContext);

  const medsDataHandler = (medsData) => {
    medsCnxt.addMedsItems(medsData);
  };

  return (
    <div className="bg-cyan-600 px-2 py-2  mx-auto mt-16 rounded-lg shadow-md text-center sm:max-w-2xl md:w-1/2">
      <NewMedsForm onSaveData={medsDataHandler} />
    </div>
  );
};

export default NewMeds;
