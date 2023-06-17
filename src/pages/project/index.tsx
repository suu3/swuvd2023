import React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Project from "@/components/pages/project";

const IndexPage: React.FC<PageProps> = ({ location, data }) => {
  return <Project data={data} />;
};

export default IndexPage;

export const query = graphql`
  query allProjectJson {
    allProjectJson {
      edges {
        node {
          uid
          title
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
