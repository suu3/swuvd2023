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
import videoSrc from "@/../contents/project/5/video.mp4";

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
    youtubeUrl: string;
  };
};
const ProjectDetail = ({ project }: ProjectDetailType) => {
  const { authors, about, project_image, detail_image, title, youtubeUrl } =
    project;

  const renderVideo = (() => {
    if (!youtubeUrl) return null;
    // if (youtubeUrl.includes("./"))
    //   return (
    //     <video controls width="100%">
    //       <source src={videoSrc} type="video/mp4" />
    //     </video>
    //   );
    return (
      <iframe
        width="100%"
        height="780"
        src={youtubeUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    );
  })();
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
            layout="fixed"
            // layout="fullWidth"
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
          {renderVideo}
          {detail_image &&
            detail_image?.map(({ src }, idx) => {
              return (
                <GatsbyImage
                  key={idx}
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
