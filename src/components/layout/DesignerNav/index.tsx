import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";
import { sidebar, menu, active } from "./desinger-nav.module.scss";
import React from "react";
import { Link, graphql } from "gatsby";

const DesignerNav = ({ data, location }) => {
  // const scrollbar = {
  //   draggable: true,
  //   verticalClass: scrollbarStyle,
  // };
  //https://codingbroker.tistory.com/128
  return (
    <nav className={sidebar}>
      {data.map(({ frontmatter }, idx) => {
        return (
          <Link to={`/designer/${idx}`}>
            <div
              key={idx}
              className={classNames(
                menu,
                `/designer/${idx}` === location.pathname && active
              )}
            >
              {frontmatter.name}
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default DesignerNav;
const designerList = Array(40)
  .fill({})
  .map(() => {
    return {
      name: "김슈니",
    };
  });
