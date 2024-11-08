import { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

const Modal = ({ onCloseHandler }) => {
  
  
   const modalElement = useRef(null); 
   useClickOutside(modalElement,onCloseHandler);
   return (
    <div
      ref={modalElement}
      id="modal"
      style={{
        border: "1px solid black",
        width: "1000px",
        height: "200px",
        zIndex: 1,
        margin: "10px",
        backgroundColor: 'white',
        overflow: 'auto'
      }}
    >
      <div
        style={{
          width: "50%",
          margin: "0px auto",
        }}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
          deserunt odit numquam nam excepturi fugit accusantium enim molestiae
          id similique exercitationem voluptas, qui minima cum eius aperiam
          eveniet libero quos.
        </p>
      </div>

      <div
        style={{
          width: "auto",
          margin: "0px auto",
        }}
      >
        <button
          onClick={() => {
            onCloseHandler();
          }}
        >
          {" "}
          Close Modal{" "}
        </button>
      </div>
    </div>
  );
};

export default Modal;
