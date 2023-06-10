import React, { Fragment } from "react";
import * as styles from "./gnb.module.scss";
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

type GNBType = { pathname: string; theme: "light" | "dark" };

const GNB = ({ pathname, theme = "light" }: GNBType) => {
  const renderMenus = menus.map(({ title, link }, idx) => {
    return (
      <Fragment key={title}>
        <Link to={link}>
          <span
            className={classnames(
              styles["menu"],
              link === pathname && styles["active"]
            )}
          >
            {title}
          </span>
        </Link>
        {idx !== menus.length - 1 && <div className={styles["border"]} />}
      </Fragment>
    );
  });
  return (
    <nav className={classnames(styles["nav"], styles[theme])}>
      <div>
        SEOUL WOMEN’S UNIVERSITY <br />
        VISUAL COMMUNICATION DESIGN
      </div>

      <div>{renderMenus}</div>
    </nav>
  );
};

export default GNB;