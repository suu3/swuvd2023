import React from "react";
import {
  section,
  location,
  desktopOnly,
  mobileOnly,
  title,
} from "./img-section.module.scss";
import AbsoluteText from "@/components/common/AbsoluteText";
import useIsMobile from "@/hooks/useIsMobile";
import DesktopGnb from "@/layouts/GNB/DesktopGnb";
import MobileLocationSvg from "./MobileLocationSvg";
import LocationSvg from "./LocationSvg";

const ImgSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className={section}>
      {!isMobile && <DesktopGnb theme="light" pathname="/" />}
      <AbsoluteText text="40TH EXHIBITION" type="left" desktopOnly />
      <AbsoluteText text="2023.07.07 - 07.15" type="right" desktopOnly />
      {isMobile && (
        <p className={title}>
          SWUVD
          <br /> 40TH
          <br /> EXHIBITION
        </p>
      )}
      <div className={location}>
        <Location isMobile={isMobile} />
      </div>
    </section>
  );
};

export default ImgSection;

const Location = ({ isMobile }: { isMobile: boolean }) =>
  isMobile ? (
    <div className={mobileOnly}>
      <MobileLocationSvg />
    </div>
  ) : (
    <div className={desktopOnly}>
      <LocationSvg />
    </div>
  );
