import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import DesignerDetail from "@/components/pages/designer/[id]";

const IndexPage: React.FC<PageProps> = ({ location, data }) => {
  return (
    <DesignerDetail
      location={location}
      list={data.list.allProjectJson.edges}
      data={data.data.projectJson}
    />
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Designer | SWUVD 2023</title>;

export const query = graphql`
  query ($id: String) {
    list: allProjectJson {
      edges {
        node {
          id
          name
        }
      }
    }
  
    data:{
      projectJson(uid: { eq: $id }) {
        id
        name
        enName
        email
        instagram
        project_image {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          category
        }
      }
    }
  }
`;
