import React, { ReactNode } from "react";
import { koStyle, enStyle } from "./explain-text.module.scss";

type ExplainTextType = {
  ko: ReactNode[];
  en?: ReactNode[];
};
const ExplainText = ({ ko, en }: ExplainTextType) => {
  return (
    <>
      <div className={koStyle}>
        {ko.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
      {en && (
        <div className={enStyle}>
          {en.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default ExplainText;
