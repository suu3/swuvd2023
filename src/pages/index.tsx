import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import ImgSection from "@/components/domains/about/ImgSection";
import ConceptSection from "@/components/domains/about/ConceptSection";
import DesignSection from "@/components/domains/about/DesignSection";
import InfoSection from "@/components/domains/about/InfoSection";
import ExhibitionSection from "@/components/domains/about/ExhibitionSection";
import ProfessorSection from "@/components/domains/about/ProfessorSection";
import SEO from "@/layouts/SEO";
import BackgroundLine from "@/components/common/BackgroundLine";
import useIsMobile from "@/hooks/useIsMobile";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const isMobile = useIsMobile();
  return (
    <>
      <ImgSection />
      <div style={{ position: "relative" }}>
        {isMobile && <BackgroundLine />}
        <ConceptSection />
        <DesignSection />
        <InfoSection />
        <ExhibitionSection />
      </div>
      <ProfessorSection />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>금 : 線 | 서울여자대학교 시각디자인전공 40회 졸업전시회</title>
    <SEO />
  </>
);
