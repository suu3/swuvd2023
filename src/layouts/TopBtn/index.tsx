import React, { useCallback, useEffect, useState } from "react";
import { circle } from "./top-btn.module.scss";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

const TopBtn = () => {
  const [active, setActive] = useState(false);
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const addTopBtn = () => {
    if (window.scrollY > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  useEffect(() => {
    //TO DO: 디바운스
    document.addEventListener("scroll", addTopBtn);

    return () => {
      document.removeEventListener("scroll", addTopBtn);
    };
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
          }}
          className={classNames(circle)}
          onClick={scrollToTop}
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopBtn;
