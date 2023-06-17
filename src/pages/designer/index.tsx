import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Designer from "@/components/pages/designer";

const IndexPage: React.FC<PageProps> = ({ location, data }) => {
  return <Designer location={location} data={data.allMdx.nodes.frontmatter} />;
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          name
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Designer | SWUVD 2023</title>;
