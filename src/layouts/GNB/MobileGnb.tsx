import React, { useEffect, useState, useCallback } from "react";
import * as styles from "./mobile-gnb.module.scss";
import classnames from "classnames";
import { Link } from "gatsby";
import { menus, GNBType } from "./contants";
import { AnimatePresence, motion } from "framer-motion";
import useLockBody from "@/hooks/useLockBody";

const SECTION_HEIGHT = 640;

const MobileGnb = ({ pathname, theme = "dark" }: GNBType) => {
  const [_theme, _setTheme] = useState(theme);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((p) => !p);
  };

  function changeHeader() {
    if (window.scrollY > SECTION_HEIGHT) {
      _setTheme("dark");
    } else {
      _setTheme("light");
    }
  }

  useEffect(() => {
    _setTheme(theme);

    if (pathname === "/") {
      window.addEventListener("scroll", changeHeader);
    }

    return () => {
      if (pathname === "/") {
        window.removeEventListener("scroll", changeHeader);
      }
    };
  }, [theme]);

  const icon = isOpen ? (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="20.999"
        y="2.99609"
        width="25.6326"
        height="3"
        transform="rotate(135 20.999 2.99609)"
        fill="black"
      />
      <rect
        x="2.87451"
        y="0.875"
        width="25.6326"
        height="3"
        transform="rotate(45 2.87451 0.875)"
        fill="black"
      />
    </svg>
  ) : (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="22" height="3" fill="black" />
      <rect y="9" width="22" height="3" fill="black" />
      <rect y="18" width="22" height="3" fill="black" />
    </svg>
  );

  return (
    <>
      <nav
        className={classnames(
          styles["nav"],
          isOpen ? styles["dark"] : styles[_theme]
        )}
      >
        <Link to="/">
          <svg
            width="40"
            height="39"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 20.96L38.84 23.84C36.48 25.8 33.96 27.92 32 29.24L29.16 26.92C31 25.4 33.56 22.84 35 20.96ZM25.2 0.96L30.64 1.8C29.48 4 28.16 6.2 27.12 7.64L23.04 6.72C23.84 5.04 24.76 2.72 25.2 0.96ZM21.84 14.24V16.32H32.56V14.24H21.84ZM21.84 8.68V10.8H32.56V8.68H21.84ZM17.52 5H37.12V20.04H17.52V5ZM25.24 18.4H29.52V34.04C29.52 36.08 29.24 37.2 27.96 37.88C26.64 38.52 24.92 38.6 22.48 38.6C22.36 37.4 21.84 35.68 21.32 34.48C22.72 34.52 24.2 34.52 24.64 34.52C25.12 34.52 25.24 34.4 25.24 34V18.4ZM16.48 22.72H22.24V26.64H16.48V22.72ZM21.32 22.72H22.16L22.88 22.6L25.44 23.64C24.04 30.12 21 34.6 17.12 37C16.52 36.08 15.04 34.44 14.16 33.8C17.68 31.84 20.32 28.2 21.32 23.36V22.72ZM29.12 18.56C30.28 23.84 33.08 30.28 39.44 33.08C38.56 33.96 37.16 35.76 36.56 36.96C30.48 33.56 27.64 26.28 26.52 21.12L29.12 18.56ZM7.16 1.08L11.32 2.52C9.68 5.64 7.84 9.2 6.32 11.44L3.12 10.12C4.52 7.72 6.24 3.84 7.16 1.08ZM11.68 5.8L15.56 7.6C12.64 12.08 8.76 17.64 5.68 21.08L2.92 19.52C5.92 15.92 9.56 10.08 11.68 5.8ZM0.96 10.4L3.32 7.2C5.4 9.08 7.84 11.68 8.8 13.56L6.2 17.24C5.32 15.28 2.96 12.44 0.96 10.4ZM10.32 15.4L13.64 14C15.24 16.72 16.76 20.24 17.24 22.52L13.64 24.16C13.2 21.84 11.8 18.16 10.32 15.4ZM0.84 18.6C4.44 18.4 9.6 18.12 14.6 17.8L14.64 21.72C9.96 22.08 5.08 22.44 1.36 22.72L0.84 18.6ZM11.4 25.44L14.76 24.4C15.68 26.6 16.48 29.4 16.72 31.28L13.16 32.4C13.04 30.56 12.28 27.64 11.4 25.44ZM2.56 24.56L6.4 25.2C6 29.04 5.16 33 4 35.56C3.2 35.04 1.44 34.28 0.52 33.88C1.64 31.52 2.24 27.92 2.56 24.56ZM6.96 20.72H11.08V38.6H6.96V20.72Z"
              fill="black"
            />
          </svg>
        </Link>

        <div className={styles["hamburger"]} onClick={toggleMenu}>
          {icon}
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && <Options {...{ pathname, toggleMenu }} />}
      </AnimatePresence>
    </>
  );
};

export default MobileGnb;

const Options = ({ pathname, toggleMenu }) => {
  const [blockScroll, allowScroll] = useLockBody();

  useEffect(() => {
    blockScroll();
    return () => {
      allowScroll();
    };
  }, []);

  const renderMenus = menus.map(({ title, link }, idx) => {
    const isActive = link === "/" ? pathname === link : pathname.includes(link);
    return (
      <Link to={link} key={title} onClick={toggleMenu}>
        <li
          className={classnames(styles["menu"], isActive && styles["active"])}
        >
          {title}
        </li>
      </Link>
    );
  });

  return (
    <motion.div
      className={styles["options"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.15,
      }}
    >
      <ul>{renderMenus}</ul>
      <p>
        SEOUL WOMEN’S UNIVERSITY
        <br /> VISUAL COMMUNICATION DESIGN
      </p>
    </motion.div>
  );
};
