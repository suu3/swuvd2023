import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { section, img } from "./exhibition-section.module.scss";
import useIsMobile from "@/hooks/useIsMobile";

const ExhibitionSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className={section}>
      {/* {!isMobile && (
        <div className={img}>
          <StaticImage
            layout="fixed"
            placeholder="dominantColor"
            alt="exhibition interior"
            src="./_images/exhibition.png"
            objectFit="cover"
            width={700}
          />
        </div>
      )} */}
      <div className={img}>
        <StaticImage
          layout="fullWidth"
          placeholder="dominantColor"
          alt="exhibition interior"
          src="./_images/exhibition.png"
          objectFit="cover"
        />
      </div>
      {/* {!isMobile && (
        <div className={img}>
          <StaticImage
            layout="fixed"
            placeholder="dominantColor"
            alt="exhibition interior"
            src="./_images/exhibition.png"
            objectFit="cover"
            width={700}
          />
        </div>
      )} */}
    </section>
  );
};

export default ExhibitionSection;
