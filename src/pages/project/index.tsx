import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Project from "@/components/pages/project";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return <Project />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Project | SWUVD 2023</title>;
