import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Designer from "@/components/pages/designer";
import useIsMobile from "@/hooks/useIsMobile";

const IndexPage: React.FC<PageProps> = ({ location, data }) => {
  const isMobile = useIsMobile();

  return <>{isMobile && <Designer data={data.list.edges} />}</>;
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
