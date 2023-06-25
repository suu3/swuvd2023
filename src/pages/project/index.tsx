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
    <title>Project | SWUVD 2023</title>
    <SEO />
  </>
);

export const query = graphql`
  query allProjectJson {
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
