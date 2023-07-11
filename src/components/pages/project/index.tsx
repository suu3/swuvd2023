import React, { useState } from "react";
import Card from "@/components/common/Card";
import { grid, section } from "./project.module.scss";
import ProjectNav from "@/layouts/ProjectNav";
import TopBtn from "@/layouts/TopBtn";
import useIsMobile from "@/hooks/useIsMobile";
import { navigate } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { navList } from "@/layouts/ProjectNav";

type ProjectProps = {
  data: {
    node: {
      category: string;
      uid: number;
      title: string;
      authors: {
        name: string;
        email: string;
      }[];
      project_image: IGatsbyImageData;
    };
  }[];
  cate: string;
};

const Project = ({ data, cate }: ProjectProps) => {
  const isMobile = useIsMobile();

  const [curMenu, setCurMenu] = useState(
    navList.find((item) => item.id === cate) ?? navList[0]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [clickCard, setClickCard] = useState(null);

  const toggleMenu = () => {
    setIsOpen((p) => !p);
  };

  const handleMenu = (item: { id: string; label: string }) => {
    setCurMenu(item);
    navigate(`?cate=${item.id}`);
    toggleMenu();
  };

  const renderCards = data
    ?.filter(({ node: item }) => {
      if (curMenu.label === "전체") return true;
      return item.category === curMenu.label;
    })
    .map(({ node: item }, idx) => (
      <Card {...{ clickCard, setClickCard }} key={item.uid} item={item} />
    ));
  return (
    <section className={section}>
      {isMobile && <TopBtn />}
      <ProjectNav
        curMenu={curMenu}
        toggleMenu={toggleMenu}
        handleMenu={handleMenu}
        isOpen={isOpen}
      />
      <div className={grid}>{renderCards}</div>
    </section>
  );
};

export default Project;
