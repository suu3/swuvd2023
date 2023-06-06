import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import GNB from "@/components/layout/GNB";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <main>
      <GNB pathname={location.pathname} />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
