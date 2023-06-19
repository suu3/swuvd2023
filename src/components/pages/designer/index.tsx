import React, { useEffect } from "react";
import { section, grid } from "./desinger.module.scss";
import { navigate } from "gatsby";

const Designer = ({ data }) => {
  let timer: NodeJS.Timeout | null = null;

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return (
    <section className={section}>
      <h1>DESIGNER</h1>
      <div className={grid}>
        {data.map(({ node }) => {
          const { uid, name } = node;
          return (
            <span
              onClick={() => {
                timer = setTimeout(() => {
                  navigate(`/designer/${uid}`);
                }, 100);
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
