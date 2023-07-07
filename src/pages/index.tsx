import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import ImgSection from "@/components/pages/about/ImgSection";
import ConceptSection from "@/components/pages/about/ConceptSection";
import DesignSection from "@/components/pages/about/DesignSection";
import InfoSection from "@/components/pages/about/InfoSection";
import ExhibitionSection from "@/components/pages/about/ExhibitionSection";
import ProfessorSection from "@/components/pages/about/ProfessorSection";
import SEO from "@/layouts/SEO";
import DesktopGnb from "@/layouts/GNB/DesktopGnb";
import useIsMobile from "@/hooks/useIsMobile";
import ReactPageScroller from "react-page-scroller";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const isMobile = useIsMobile();
  return (
    <>
      <ImgSection />
      <ConceptSection />
      <DesignSection />
      <InfoSection />
      <ExhibitionSection />
      <ProfessorSection />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>About | SWUVD 2023</title>
    <SEO />
  </>
);
