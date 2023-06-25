import React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import ProjectDetail from "@/components/pages/project/detail";
import SEO from "@/layouts/SEO";

const IndexPage: React.FC<PageProps> = ({ location, data }) => {
  return <ProjectDetail project={data?.projectJson} />;
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Project | SWUVD 2023</title>
    <SEO />
  </>
);

export const query = graphql`
  query MyQuery($id: String) {
    projectJson(uid: { eq: $id }) {
      uid
      title
      authors {
        name
        email
      }
      about
      project_image {
        childImageSharp {
          gatsbyImageData
        }
      }
      detail_image {
        src {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
