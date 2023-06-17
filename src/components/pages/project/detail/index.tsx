import React from "react";
import {
  main,
  designersSection,
  designerInfo,
  imgWrapper,
  aboutSection,
  detailSection,
} from "./project-detail.module.scss";

type ProjectDetailType = {
  project: {
    name: string;
    designers: {
      name: string;
      email: string;
    }[];
    about: string;
  };
};
const ProjectDetail = ({
  project: { name, designers, about },
}: ProjectDetailType) => {
  return (
    <main className={main}>
      <h1>{name}</h1>
      <section className={designersSection}>
        <div className={designerInfo}>
          {designers.map((designer) => {
            return (
              <div>
                <p>{designer.name}</p>
                <p>{designer.email}</p>
              </div>
            );
          })}
        </div>
        <div className={imgWrapper}></div>
      </section>
      <section className={aboutSection}>
        <h2>About</h2>
        <div>{about}</div>
      </section>

      <section className={detailSection}>
        <h2>Project Detail</h2>
        <div></div>
      </section>
    </main>
  );
};

export default ProjectDetail;
