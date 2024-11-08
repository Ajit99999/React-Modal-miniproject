import { useEffect } from "react";

const useClickOutside = (modalElement, handler) => {
  useEffect(() => {
    const callback = (e) => {
      if (!modalElement.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", callback);

    return () => {
      document.removeEventListener("mousedown", callback);
    };
  }, []);
};

export default useClickOutside;
