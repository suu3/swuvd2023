import { HeadFC, graphql } from "gatsby";
import React, { FunctionComponent } from "react";
import ProjectDetail from "@/components/pages/project/detail";
import SEO from "@/layouts/SEO";

type ProjectTemplateProps = {
  data: any;
};

const ProjectTemplate: FunctionComponent<ProjectTemplateProps> = function ({
  data,
}) {
  return <ProjectDetail project={data?.projectJson} />;
};

export default ProjectTemplate;

export const Head: HeadFC = () => (
  <>
    <title>Project | SWUVD 2023</title>
    <SEO />
  </>
);

export const query = graphql`
  query MyQuery($uid: String) {
    projectJson(uid: { eq: $uid }) {
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
