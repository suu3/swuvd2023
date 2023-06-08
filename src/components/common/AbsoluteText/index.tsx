import React from "react";
import * as styles from "./absolute-text.module.scss";
import classNames from "classnames";

type AbsoluteTextType = {
  text: string;
  type: "left" | "right";
};
const AbsoluteText = ({ text, type }: AbsoluteTextType) => {
  return <p className={classNames(styles[type])}>{text}</p>;
};

export default AbsoluteText;
