import React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Project from "@/components/pages/project";
import SEO from "@/layouts/SEO";

const IndexPage: React.FC<PageProps> = ({ location, data }) => {
  return <Project data={data.allProjectJson?.edges} />;
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Project | 서울여자대학교 시각디자인전공 40회 졸업전시회</title>
    <SEO />
  </>
);

export const query = graphql`
  query AllProjectQuery {
    allProjectJson {
      edges {
        node {
          uid
          title
          categoryId
          authors {
            name
            email
          }
          project_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
