import React, { ReactNode, useEffect, useState, useCallback } from "react";
import DesktopGnb from "@/layouts/GNB/DesktopGnb";
import MobileGnb from "@/layouts/GNB/MobileGnb";
import { main, designMain } from "./layout.module.scss";
import DesignerNav from "@/layouts/DesignerNav";
import { graphql, type HeadFC, type PageProps } from "gatsby";

type LayoutProps = {
  children: ReactNode;
  location: any;
};

const pageTheme: {
  [key: string]: "light" | "dark";
} = {
  "/": "light",
  "/project": "dark",
  "/designer": "dark",
};

export default function CommonLayout({
  pageContext,
  children,
  location,
  data,
}: LayoutProps & React.FC<PageProps>) {
  const { pathname } = location;
  const [theme, setTheme] = useState(pageTheme[pathname]);

  useEffect(() => {
    setTheme(pageTheme[pathname]);
  }, [pathname]);

  if (pageContext.layout === "designer") {
    return (
      <>
        <DesktopGnb theme={theme} pathname={location.pathname} />
        <MobileGnb theme={theme} pathname={location.pathname} />
        <main className={designMain}>
          <DesignerNav location={location} data={data?.list} />
          {children}
        </main>
      </>
    );
  }

  return (
    <>
      <DesktopGnb theme={theme} pathname={location.pathname} />
      <MobileGnb theme={theme} pathname={location.pathname} />
      <main className={main}>{children}</main>
    </>
  );
}
