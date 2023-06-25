import React from "react";
import * as styles from "./absolute-text.module.scss";
import classNames from "classnames";

type AbsoluteTextType = {
  text: string;
  type: "left" | "right";
  desktopOnly?: boolean;
  mobileOnly?: boolean;
  location?: "top" | "center";
};

const AbsoluteText = ({
  text,
  type,
  desktopOnly = true,
  mobileOnly = false,
  location = "center",
}: AbsoluteTextType) => {
  return (
    <p
      className={classNames(
        styles[type],
        desktopOnly && styles["desktopOnly"],
        mobileOnly && styles["mobileOnly"],
        styles[location]
      )}
    >
      {text}
    </p>
  );
};

export default AbsoluteText;
