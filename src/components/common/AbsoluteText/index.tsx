import React from "react";
import * as styles from "./absolute-text.module.scss";
import classNames from "classnames";

type AbsoluteTextType = {
  text: string;
  type: "left" | "right";
  desktopOnly?: boolean;
};

const AbsoluteText = ({ text, type, desktopOnly = true }: AbsoluteTextType) => {
  return (
    <p
      className={classNames(styles[type], desktopOnly && styles["desktopOnly"])}
    >
      {text}
    </p>
  );
};

export default AbsoluteText;
