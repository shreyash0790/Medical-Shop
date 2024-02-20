const ShoeFormInput = function (props) {
  return (
    <div className="flex items-center mb-0.5">
      <label className="font-bold mr-4 text-black">{props.label} </label>
      <input
        className="w-12 border-1 border-solid border-gray-300 rounded px-2 font-inherit"
        {...props.input}
      />
    </div>
  );
};

export default ShoeFormInput;
