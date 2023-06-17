import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import ImgSection from "@/components/pages/about/ImgSection";
import ConceptSection from "@/components/pages/about/ConceptSection";
import DesignSection from "@/components/pages/about/DesignSection";
import InfoSection from "@/components/pages/about/InfoSection";
import ExhibitionSection from "@/components/pages/about/ExhibitionSection";
import ProfessorSection from "@/components/pages/about/ProfessorSection";
import ReactPageScroller from "react-page-scroller";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <>
      <ReactPageScroller>
        <ImgSection />
        <ConceptSection />
        <DesignSection />
        <InfoSection />
        <ExhibitionSection />
        <ProfessorSection />
      </ReactPageScroller>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>About | SWUVD 2023</title>;
