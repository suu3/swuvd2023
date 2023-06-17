import React from "react";
import { main, scrollbarStyle, sidebar, menu } from "./desinger.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import classNames from "classnames";

const Designer = () => {
  const scrollbar = {
    // draggable: true,
    verticalClass: scrollbarStyle,
  };
  return (
    <main className={main}>
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
    </main>
  );
};

{
  /* <nav className={sidebar}>
{designerList.map(({ name }) => {
  return <div className={menu}>{name}</div>;
})}
</nav>
 */
}

export default Designer;
const designerList = [
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
  {
    name: "김슈니",
  },
];
