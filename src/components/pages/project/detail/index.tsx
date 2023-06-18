import React from "react";
import {
  main,
  designersSection,
  designerInfo,
  imgWrapper,
  aboutSection,
  detailSection,
} from "./project-detail.module.scss";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

type ProjectDetailType = {
  project: {
    title: string;
    authors: {
      name: string;
      email: string;
    }[];
    about: string;
    project_image: IGatsbyImageData;
    detail_image: {
      src: IGatsbyImageData;
    };
  };
};
const ProjectDetail = ({ project }: ProjectDetailType) => {
  const { authors, about, project_image, detail_image, title } = project;

  return (
    <main className={main}>
      <h1>{title}</h1>
      <section className={designersSection}>
        <div className={designerInfo}>
          {authors?.map((designer, idx) => {
            return (
              <div key={idx}>
                <p>{designer.name}</p>
                <p>{designer.email}</p>
              </div>
            );
          })}
        </div>
        <div className={imgWrapper}>
          <GatsbyImage
            // layout="fixed"
            layout="fullWidth"
            objectFit="cover"
            sizes="100%"
            image={getImage(project_image)}
            alt={title}
          />
        </div>
      </section>
      <section className={aboutSection}>
        <h2>About</h2>
        <div>{about}</div>
      </section>

      <section className={detailSection}>
        <h2>Project Detail</h2>
        <div>
          {detail_image.map(({ src }) => {
            return (
              <GatsbyImage
                key={src}
                // layout="fixed"
                layout="fullWidth"
                objectFit="cover"
                sizes="100%"
                image={getImage(src)}
                alt={title}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
