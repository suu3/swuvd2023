import { HeadFC, graphql } from "gatsby";
import React, { FunctionComponent } from "react";
import ProjectDetail from "@/components/pages/project/detail";
import SEO from "@/layouts/SEO";
import { IGatsbyImageData } from "gatsby-plugin-image";

type ProjectTemplateProps = {
  data: {
    projectJson: {
      title: string;
      authors: { name: string; email: string }[];
      about: string;
      project_image: IGatsbyImageData;
      detail_image: { src: IGatsbyImageData };
    };
  };
};

const ProjectTemplate: FunctionComponent<ProjectTemplateProps> = function ({
  data,
}) {
  return <ProjectDetail project={data?.projectJson} />;
};

export default ProjectTemplate;

export const Head: HeadFC = () => (
  <>
    <title>Project | 서울여자대학교 시각디자인전공 40회 졸업전시회</title>
    <SEO />
  </>
);

export const query = graphql`
  query ProjectQuery($uid: String) {
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
      youtubeUrl
    }
  }
`;
