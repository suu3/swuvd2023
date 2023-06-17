import Card from "@/components/common/Card";
import React from "react";
import { grid, section } from "./project.module.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Project = ({ data }) => {
  // const image = getImage(data?.allProjectJson?.edges?.node?.project_image);

  const renderCards = data?.allProjectJson?.edges.map(({ node: item }) => (
    <Card key={item.id} item={item} />
  ));
  return (
    <section className={section}>
      <div className={grid}>{renderCards}</div>
    </section>
  );
};

export default Project;

// const datas = Array(40)
//   .fill({})
//   .map((_, idx) => ({
//     id: idx,
//     title: "프로젝트 명",
//     authors: ["김슈니", "김슈니", "김슈니"],
//     src: dummy,
//   }));
