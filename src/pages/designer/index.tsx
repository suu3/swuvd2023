import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Designer from "@/components/pages/designer";
import useIsMobile from "@/hooks/useIsMobile";
import SEO from "@/layouts/SEO";

const IndexPage: React.FC<PageProps> = ({ location, data }) => {
  const isMobile = useIsMobile();

  return <>{isMobile && <Designer data={data.list.edges} />}</>;
};

export const query = graphql`
  query allDesingerQuery {
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

export const Head: HeadFC = () => (
  <>
    <title>Designer | 서울여자대학교 시각디자인전공 40회 졸업전시회</title>
    <SEO />
  </>
);
