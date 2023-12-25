import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { menuWrapper, menu, active } from "./desinger-nav.module.scss";
import { navigate } from "gatsby";
import { DESIGNER_URL } from "@/constants/serviceUrls";
// import ScrollBar from "./ScrollBar";

const DesignerNav = ({ uid, data: { edges }, location }) => {
  const itemRefs = edges.reduce((acc, value) => {
    acc[value.node.uid] = React.createRef();
    return acc;
  }, {});

  const containerRef = useRef();

  const goToDetail = (uid: string) => {
    navigate(`${DESIGNER_URL}/${uid}`);
  };

  useEffect(() => {
    const item = itemRefs?.[uid]?.current;
    const container = containerRef?.current;
    if (!item || !container) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    const scrollPosition =
      itemRect.top -
      containerRect.top -
      (containerRect.height - itemRect.height) / 2;

    // if (container.scrollTop) container.scrollTop += scrollPosition;
    container.scrollTo({ top: container.scrollTop + scrollPosition });
    // refs?.[uid]?.current.scrollIntoView();
  }, [itemRefs, containerRef]);

  const renderMenus = edges.map(
    ({ node }: { node: { uid: string; name: string } }, idx: string) => {
      return (
        <div
          ref={itemRefs[node.uid]}
          key={idx}
          onClick={() => {
            goToDetail(node.uid);
          }}
          className={classNames(
            menu,
            `${DESIGNER_URL}/${node.uid}` === location.pathname && active
          )}
        >
          {node.name}
        </div>
      );
    }
  );
  return (
    <nav ref={containerRef} className={menuWrapper}>
      {renderMenus}
    </nav>
  );
};

export default DesignerNav;
