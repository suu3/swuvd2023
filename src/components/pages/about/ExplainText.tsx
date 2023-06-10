import React, { ReactNode } from "react";
import { koStyle, enStyle } from "./explain-text.module.scss";
import classNames from "classnames";

type ExplainTextType = {
  ko: ReactNode[];
  en: ReactNode[];
};
const ExplainText = ({ ko, en }: ExplainTextType) => {
  return (
    <>
      <div className={koStyle}>
        {ko.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
      <div className={enStyle}>
        {en.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
    </>
  );
};

export default ExplainText;
