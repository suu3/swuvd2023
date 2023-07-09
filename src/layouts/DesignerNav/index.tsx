import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { menuWrapper, menu, active } from "./desinger-nav.module.scss";
import { navigate } from "gatsby";
// import ScrollBar from "./ScrollBar";

const DesignerNav = ({ uid, data: { edges }, location }) => {
  const refs = edges.reduce((acc, value) => {
    acc[value.node.uid] = React.createRef();
    return acc;
  }, {});

  const goToDetail = (uid: string) => {
    navigate(`/designer/${uid}`);
  };

  useEffect(() => {
    refs?.[uid]?.current.scrollIntoView();
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
  return <nav className={menuWrapper}>{renderMenus}</nav>;
};

export default DesignerNav;
