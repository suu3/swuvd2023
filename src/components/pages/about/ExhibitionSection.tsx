import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { section, img } from "./exhibition-section.module.scss";

const ExhibitionSection = () => {
  return (
    <section className={section}>
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
    </section>
  );
};

export default ExhibitionSection;
