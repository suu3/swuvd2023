import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return <div>dd</div>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Designer | SWUVD 2023</title>;
