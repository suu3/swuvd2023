import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { section, img } from "./exhibition-section.module.scss";
import { useMediaQuery } from "react-responsive";

const ExhibitionSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 991px)",
  });
  return (
    <section className={section}>
      {!isMobile && (
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
      )}
      <div className={img}>
        <StaticImage
          layout="fixed"
          placeholder="dominantColor"
          alt="exhibition interior"
          src="./_images/exhibition.png"
          objectFit="cover"
          width={1218}
        />
      </div>
      {!isMobile && (
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
      )}
    </section>
  );
};

export default ExhibitionSection;
