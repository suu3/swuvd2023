import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ImgSection from "@/components/pages/about/ImgSection";
import ConceptSection from "@/components/pages/about/ConceptSection";
import DesignSection from "@/components/pages/about/DesignSection";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <>
      <ImgSection />
      <ConceptSection />
      <DesignSection />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>SWUVD 2023</title>;
