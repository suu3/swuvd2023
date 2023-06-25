import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main
      style={{
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        padding: "200px",
        lineHeight: "100px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "50px",
        }}
      >
        404 NOT FOUND
      </p>
      존재하지 않는 페이지입니다.
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
