import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import DesignerDetail from "@/components/pages/designer/[id]";

const IndexPage: React.FC<PageProps> = ({ location, data }) => {
  return (
    <DesignerDetail
      location={location}
      list={data.list.edges}
      data={data.data}
    />
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Designer | SWUVD 2023</title>;

export const query = graphql`
  query ($id: String) {
    list: allDesignerJson {
      edges {
        node {
          uid
          name
        }
      }
    }

    data: designerJson(uid: { eq: $id }) {
      id
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
