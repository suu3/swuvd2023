import classNames from "classnames";
import { sidebar, menu, active } from "./desinger-nav.module.scss";
import React from "react";
import { Link } from "gatsby";

const DesignerNav = ({ data: { edges }, location }) => {
  // const scrollbar = {
  //   draggable: true,
  //   verticalClass: scrollbarStyle,
  // };
  //https://codingbroker.tistory.com/128

  const renderMenus = edges.map(
    ({ node }: { node: { uid: string; name: string } }, idx: string) => {
      return (
        <Link to={`/designer/${node.uid}`} key={idx}>
          <div
            className={classNames(
              menu,
              `/designer/${node.uid}` === location.pathname && active
            )}
          >
            {node.name}
          </div>
        </Link>
      );
    }
  );
  return <nav className={sidebar}>{renderMenus}</nav>;
};

export default DesignerNav;
