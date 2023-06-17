import React from "react";
import type { HeadFC, PageProps } from "gatsby";
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

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return <ProjectDetail project={project} />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Project | SWUVD 2023</title>;
