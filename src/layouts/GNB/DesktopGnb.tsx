import React, { Fragment } from "react";
import * as styles from "./desktop-gnb.module.scss";
import classnames from "classnames";
import { Link } from "gatsby";
import { menus, GNBType } from "./contants";

const DesktopGnb = ({ pathname, theme = "dark" }: GNBType) => {
  const renderMenus = menus.map(({ title, link }, idx) => {
    const isActive = link === "/" ? pathname === link : pathname.includes(link);
    return (
      <Fragment key={title}>
        <Link to={link}>
          <span
            className={classnames(styles["menu"], isActive && styles["active"])}
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

export default DesktopGnb;
