import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Designer from "@/components/pages/designer";

const IndexPage: React.FC<PageProps> = ({ location, data }) => {
  return <></>;
};

export const query = graphql`
  query {
    list: allDesignerJson {
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
