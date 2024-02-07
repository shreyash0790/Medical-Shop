/* eslint-disable react/prop-types */
import { Fragment } from "react";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-2 bg-transparent bg-gray-700 bg-opacity-30  "
      onClick={props.OnClose}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className=" flex flex-col items-center  justify-center ">
      <div className=" fixed my-20 top-40  ml-40 w-2/3 bg-white p-4 rounded-lg shadow-md z-30 animate-slide-down ">
        {props.children}
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop OnClose={props.OnClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
