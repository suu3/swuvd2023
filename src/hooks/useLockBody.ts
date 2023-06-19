import { useEffect } from "react";

const useLockBody = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);
};

export default useLockBody;
