import React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import ProjectDetail from "@/components/pages/project/detail";

const project = {
  name: "project Name",
  designers: [
    {
      name: "김슈니",
      email: "kimswuni@swu.co.kr",
    },

    {
      name: "김슈니",
      email: "kimswuni@swu.co.kr",
    },
    {
      name: "김슈니",
      email: "kimswuni@swu.co.kr",
    },
  ],
  about:
    "작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자작품설명여백포함최대300글자",
};

const IndexPage: React.FC<PageProps> = ({ location, data }) => {
  console.log(data);
  return <ProjectDetail project={project} />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Project | SWUVD 2023</title>;

export const query = graphql`
  query ($id: String) {
    allProjectJson(filter: { id: { eq: $id } }) {
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
