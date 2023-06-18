import { nav, active, options, option } from "./project-nav.module.scss";
import React, { useState } from "react";
import classNames from "classnames";

const ProjectNav = ({ curMenu, toggleMenu, handleMenu, isOpen }) => {
  return (
    <>
      <nav className={nav} onClick={toggleMenu}>
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
      </nav>
      {isOpen && (
        <div className={options}>
          {navList.map((item) => {
            return (
              <div
                onClick={() => handleMenu(item)}
                className={classNames(option, curMenu.id === item.id && active)}
                key={item.id}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ProjectNav;

const navList = [
  {
    id: "all",
    label: "전체",
  },
  {
    id: "branding",
    label: "브랜딩",
  },
  {
    id: "publish",
    label: "인쇄/출판",
  },
  {
    id: "video",
    label: "영상",
  },
  {
    id: "ux/ui",
    label: "UX/UI",
  },
  {
    id: "etc",
    label: "기타",
  },
];
