import React from "react";
import { section, grid } from "./desinger.module.scss";
import { navigate } from "gatsby";
import { DESIGNER_URL } from "@/constants/urls";

const Designer = ({ data }) => {
  return (
    <section className={section}>
      <h1>DESIGNER</h1>
      <div className={grid}>
        {data.map(({ node }) => {
          const { uid, name } = node;
          return (
            <span
              onClick={() => {
                navigate(`${DESIGNER_URL}/${uid}`);
              }}
              key={uid}
            >
              {name}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Designer;
