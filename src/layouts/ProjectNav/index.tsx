import React, { useEffect } from "react";
import {
  nav,
  active,
  options,
  option,
  border,
  curMenuStyle,
} from "./project-nav.module.scss";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import useLockBody from "@/hooks/useLockBody";
import useIsMobile from "@/hooks/useIsMobile";

const ProjectNav = ({ curMenu, toggleMenu, handleMenu, isOpen }) => {
  return (
    <>
      <nav className={nav} onClick={toggleMenu}>
        <div className={curMenuStyle}>
          {curMenu.label}
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2978 15.2832L0.812438 0.669358L19.6079 0.547512L10.2978 15.2832Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={border} />
      </nav>
      <AnimatePresence>
        {isOpen && <Options {...{ handleMenu, curMenu }} />}
      </AnimatePresence>
    </>
  );
};

export default ProjectNav;

const Options = ({ handleMenu, curMenu }) => {
  const isMobile = useIsMobile();
  const [blockScroll, allowScroll] = useLockBody();

  useEffect(() => {
    if (isMobile) {
      blockScroll();
    }
    return () => {
      if (isMobile) {
        allowScroll();
      }
    };
  }, []);
  return (
    <motion.div
      className={options}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {navList.map((item) => {
        return (
          <div
            onClick={() => handleMenu(item)}
            className={classNames(
              option,
              curMenu.label === item.label && active
            )}
            key={item.label}
          >
            {item.label}
          </div>
        );
      })}
    </motion.div>
  );
};
const navList = [
  {
    label: "전체",
  },
  {
    label: "브랜딩",
  },
  {
    label: "인쇄/출판",
  },
  {
    label: "영상",
  },
  {
    label: "UX/UI",
  },
];
