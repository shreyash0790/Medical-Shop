import ShoeForm from "./ShoeForm";
const Shoeitems = function (props) {
  return (
    <div>
      <li className="flex items-stretch justify-between space-x-5 py-7">
        <div className="flex flex-1 items-stretch">
          <div className="ml-5 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-lg font-bold text-gray-900">{props.title}</p>
              <p className="mt-1.5 text-sm font-medium text-gray-600">
                {props.description}
              </p>
            </div>
            <p className="text-left text-lg font-bold text-blue-950">
            ₹{props.price}
            </p>
            <h3 className="font-bold mr-4 text-black">Availability :<span className="text-green-900"> {props.stockAmount}</span></h3>
          </div>
        </div>
        <div className="ml-auto flex flex-col items-end justify-between">
          <ShoeForm items={props} id={props.id} />
        </div>
      </li>
    </div>
  );
};

export default Shoeitems;
