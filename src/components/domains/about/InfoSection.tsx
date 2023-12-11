import React, { Fragment } from "react";
import { border, info, infoContent } from "./info-section.module.scss";

const infos = [
  {
    title: "전시 일자",
    content: "2023.07.07 - 07.15",
  },
  {
    title: "장소",
    content: "이음갤러리",
  },
  {
    title: "시간",
    content: "10:00 - 18:00",
  },
];

const InfoSection = () => {
  const renderInfos = infos.map(({ title, content }, idx) => (
    <Fragment key={idx}>
      <div className={info}>
        <span>{title}</span>
        <span className={infoContent}>{content}</span>
      </div>
      {idx !== infos.length - 1 && <div className={border} />}
    </Fragment>
  ));

  return <section>{renderInfos}</section>;
};

export default InfoSection;
