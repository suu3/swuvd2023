import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Designer from "@/components/pages/designer";

const IndexPage: React.FC<PageProps> = ({ location, data }) => {
  return <Designer location={location} data={data.allDesignerJson.edges} />;
};

export const query = graphql`
  query {
    allDesignerJson {
      edges {
        node {
          uid
          name
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Designer | SWUVD 2023</title>;
