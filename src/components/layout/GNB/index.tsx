import React, { Fragment } from "react";
import { nav, menu, border } from "./gnb.module.scss";
import classnames from "classnames";

const menus = [
  {
    title: "ABOUT",
    link: "/",
  },
  {
    title: "PROJECT",
    link: "/project",
  },
  {
    title: "DESIGNER",
    link: "/designer",
  },
];

const GNB = ({ pathname }: { pathname: string }) => {
  const renderMenus = menus.map(({ title, link }, idx) => {
    console.log("pathname", link === pathname);
    return (
      <Fragment key={title}>
        <a href={link}>
          <span className={classnames(menu, link === pathname && "active")}>
            {title}
          </span>
        </a>
        {idx !== menus.length - 1 && <div className={border} />}
      </Fragment>
    );
  });
  return (
    <nav className={nav}>
      <div>
        SEOUL WOMEN’S UNIVERSITY <br />
        VISUAL COMMUNICATION DESIGN
      </div>

      <div>{renderMenus}</div>
    </nav>
  );
};

export default GNB;
