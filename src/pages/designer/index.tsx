import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Designer from "@/components/pages/designer";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return <Designer />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Designer | SWUVD 2023</title>;
