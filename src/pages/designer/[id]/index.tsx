import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import DesignerDetail from "@/components/pages/designer/[id]";

const IndexPage: React.FC<PageProps> = ({ location, data }) => {
  console.log(data);
  return <DesignerDetail location={location} data={data} />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Designer | SWUVD 2023</title>;

export const query = graphql`
  query ($id: String) {
    allMdx {
      nodes {
        frontmatter {
          name
        }
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        enName
        email
        instagram
      }
    }
  }
`;
