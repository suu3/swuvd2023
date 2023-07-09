import { HeadFC, graphql } from "gatsby";
import React, { FunctionComponent } from "react";
import DesignerDetail from "@/components/pages/designer/detail";
import SEO from "@/layouts/SEO";
import { IGatsbyImageData } from "gatsby-plugin-image";

type DesignerTemplateProps = {
  data: {
    list: {
      edges: {
        node: {
          uid: string;
          name: string;
        };
      };
    };
    data: {
      uid: string;
      name: string;
      enName: string;
      email: string;
      instagram: string;
      projects: {
        uid: string;
        title: string;
        authors: {
          name: string;
          email: string;
        }[];
        category: string;
        project_image: {
          src: IGatsbyImageData;
        };
      };
    };
  };
  location: any;
};

const DesignerTemplate: FunctionComponent<DesignerTemplateProps> = function ({
  data,
}) {
  return <DesignerDetail list={data.list} data={data.data} />;
};

export default DesignerTemplate;

export const Head: HeadFC = () => (
  <>
    <title>Project | 서울여자대학교 시각디자인전공 40회 졸업전시회</title>
    <SEO />
  </>
);

export const query = graphql`
  query DesingerQuery($uid: String) {
    list: allDesignerJson(sort: { name: ASC }) {
      edges {
        node {
          uid
          name
        }
      }
    }

    data: designerJson(uid: { eq: $uid }) {
      id
      uid
      name
      enName
      email
      instagram
      projects {
        uid
        title
        authors {
          name
          email
        }
        category
        project_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
