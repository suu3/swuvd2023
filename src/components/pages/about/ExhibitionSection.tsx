import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { section, img } from "./exhibition-section.module.scss";
import useIsMobile from "@/hooks/useIsMobile";

const ExhibitionSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className={section}>
      <div className={img}>
        <StaticImage
          layout="fullWidth"
          placeholder="dominantColor"
          alt="exhibition interior"
          src="./_images/exhibition.png"
          objectFit="cover"
        />
        <p>IUM GALLARY 07.07 - 07.15</p>
      </div>
    </section>
  );
};

export default ExhibitionSection;
