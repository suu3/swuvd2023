import React, { useState } from "react";
import Card from "@/components/common/Card";
import { grid, section } from "./project.module.scss";
import ProjectNav from "@/layouts/ProjectNav";
import TopBtn from "@/layouts/TopBtn";
import useIsMobile from "@/hooks/useIsMobile";
import { navigate } from "gatsby";

const Project = ({ data }) => {
  const isMobile = useIsMobile();

  const [curMenu, setCurMenu] = useState({
    label: "전체",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [clickCard, setClickCard] = useState(null);

  const toggleMenu = () => {
    setIsOpen((p) => !p);
  };

  const handleMenu = (item: { id: string; label: string }) => {
    setCurMenu(item);
    // navigate(`?category=${item.label}`);
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
