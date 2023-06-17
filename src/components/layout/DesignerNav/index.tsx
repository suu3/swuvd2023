import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import classNames from "classnames";
import { sidebar, menu, scrollbarStyle } from "./desinger-nav.module.scss";
import React from "react";

const DesignerNav = () => {
  const scrollbar = {
    draggable: true,
    verticalClass: scrollbarStyle,
  };
  return (
    <Swiper
      scrollbar={scrollbar}
      modules={[Scrollbar]}
      slidesPerView={15}
      direction="vertical"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className={sidebar}
    >
      {designerList.map(({ name }, idx) => {
        return (
          <SwiperSlide key={idx} className={classNames(menu)}>
            {name}
          </SwiperSlide>
        );
      })}
    </Swiper>
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
