import React, { useCallback } from "react";
import { circle } from "./top-btn.module.scss";

const TopBtn = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={circle} onClick={scrollToTop}>
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.3333 6.75L13.5712 8.325L9.25694 4.33125L9.25694 18L6.82639 18L6.82639 4.33125L2.51215 8.325L0.75 6.75L8.04167 -3.18729e-07L15.3333 6.75Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default TopBtn;
