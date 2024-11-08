import { useRef, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isShow, setShow] = useState(false);
  const onCloseHandler = () => {
    setShow(false);
  };

  return (
    <>
      {isShow ? (
        <Modal onCloseHandler={onCloseHandler} />
      ) : (
        <button
          onClick={() => {
            console.log("called");
            setShow(true);
          }}
        >
          Show Modal
        </button>
      )}
    </>
  );
}

export default App;
