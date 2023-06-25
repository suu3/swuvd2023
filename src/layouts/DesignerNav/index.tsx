import React, { useRef } from "react";
import classNames from "classnames";
import { sidebar, menuWrapper, menu, active } from "./desinger-nav.module.scss";
import { Link } from "gatsby";
// import ScrollBar from "./ScrollBar";
import CustomScroll from "react-custom-scroll";

const DesignerNav = ({ data: { edges }, location }) => {
  const menuRef = useRef(null);
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
  return (
    <nav className={sidebar}>
      <CustomScroll allowOuterScroll={true}>
        {/* <ScrollBar menuRef={menuRef} /> */}
        <div ref={menuRef} className={menuWrapper}>
          {renderMenus}
        </div>
      </CustomScroll>
    </nav>
  );
};

export default DesignerNav;
