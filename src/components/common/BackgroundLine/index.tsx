import {
  backgroundLine1,
  backgroundLine2,
  backgroundLine3,
} from "./background-line.module.scss";
import React from "react";
import classNames from "classnames";

const BackgroundLine = ({ className = "" }) => {
  return (
    <>
      <div className={classNames(backgroundLine1, className)} />
      <div className={classNames(backgroundLine2, className)} />
      <div className={classNames(backgroundLine3, className)} />
    </>
  );
};

export default BackgroundLine;
