import React, { useEffect, useState } from "react";
import Card from "@/components/common/Card";
import { grid, section } from "./project.module.scss";
import ProjectNav from "@/layouts/ProjectNav";
import TopBtn from "@/layouts/TopBtn";
import useIsMobile from "@/hooks/useIsMobile";

const Project = ({ data }) => {
  const isMobile = useIsMobile();

  const [curMenu, setCurMenu] = useState({
    id: "all",
    label: "전체",
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((p) => !p);
  };

  const handleMenu = (item: { id: string; label: string }) => {
    setCurMenu(item);
    toggleMenu();
  };

  const renderCards = data
    ?.filter(({ node: item }) => {
      if (curMenu.id === "all") return true;
      return item.categoryId === curMenu.id;
    })
    .map(({ node: item }, idx) => <Card key={idx} item={item} />);
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
