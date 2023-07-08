import { HeadFC, graphql } from "gatsby";
import React, { FunctionComponent } from "react";
import DesignerDetail from "@/components/pages/designer/[id]";
import SEO from "@/layouts/SEO";

type DesignerTemplateProps = {
  data: any;
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
    <title>Project | SWUVD 2023</title>
    <SEO />
  </>
);

export const query = graphql`
  query MyQuery($uid: String) {
    list: allDesignerJson {
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
