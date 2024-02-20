import { useContext } from "react";
import Shoeitems from "./ShoeItems";
import NewShoeContext from "../../../store/NewShoeContext";



const ShoeItemsList = function () {


    const shoeCnxt=useContext(NewShoeContext);
    const availabeShoes=shoeCnxt.shoeItems 
  

  return (
    <div className="  mx-auto  max-w-4xl mt-44 mb-10 bg-white rounded-xl">
      <div className="overflow-hidden rounded-xl border border-gray-100 shadow">
        <div className="px-5 py-6 md:border-r md:border-r-gray-200 md:px-8">
          <div className="flow-root">
            <ul className="-my-7 divide-y divide-gray-200">
              {availabeShoes.map((items) => (
                <Shoeitems
                  key={items.id}
                  id={items.id}
                  title={items.title}
                  description={items.description}
                  price={items.price}
                  stockAmount={items.stockAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeItemsList;
