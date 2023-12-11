import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { menuWrapper, menu, active } from "./desinger-nav.module.scss";
import { navigate } from "gatsby";
import { DESIGNER_URL } from "@/constants/urls";
// import ScrollBar from "./ScrollBar";

const DesignerNav = ({ uid, data: { edges }, location }) => {
  const refs = edges.reduce((acc, value) => {
    acc[value.node.uid] = React.createRef();
    return acc;
  }, {});
  const containerRef = useRef();

  const goToDetail = (uid: string) => {
    navigate(`${DESIGNER_URL}${uid}`);
  };

  useEffect(() => {
    refs?.[uid]?.current.scrollIntoView();

    const container = containerRef.current;
    const item = refs?.[uid]?.current;

    if (!container || !item) return;

    const containerRect = container?.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const scrollPosition =
      itemRect.top -
      containerRect.top -
      (containerRect.height - itemRect.height) / 2;

    // Scroll the container to the calculated position
    container?.scrollTop += scrollPosition;
  }, []);

  const renderMenus = edges.map(
    ({ node }: { node: { uid: string; name: string } }, idx: string) => {
      return (
        <div
          ref={refs[node.uid]}
          key={idx}
          onClick={() => {
            goToDetail(node.uid);
          }}
          className={classNames(
            menu,
            `/designer/${node.uid}` === location.pathname && active
          )}
        >
          {node.name}
        </div>
      );
    }
  );
  return (
    <nav className={menuWrapper} ref={containerRef}>
      {renderMenus}
    </nav>
  );
};

export default DesignerNav;
