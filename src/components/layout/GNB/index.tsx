import React, { Fragment } from "react";
import { nav, menu, border, active } from "./gnb.module.scss";
import classnames from "classnames";
import { Link } from "gatsby";

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
    return (
      <Fragment key={title}>
        <Link to={link}>
          <span className={classnames(menu, link === pathname && active)}>
            {title}
          </span>
        </Link>
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
