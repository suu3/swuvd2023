import React, { ReactNode, useEffect, useState, useCallback } from "react";
import DesktopGnb from "@/layouts/GNB/DesktopGnb";
import MobileGnb from "@/layouts/GNB/MobileGnb";
import { footer, main, designMain, light } from "./layout.module.scss";
import DesignerNav from "@/layouts/DesignerNav";
import { type PageProps } from "gatsby";
import useIsMobile from "@/hooks/useIsMobile";
import classNames from "classnames";

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
  const isMobile = useIsMobile();

  useEffect(() => {
    setTheme(pageTheme[pathname]);
  }, [pathname]);

  const CommonLayout = ({ children }) => (
    <>
      {!isMobile && <DesktopGnb theme={theme} pathname={location.pathname} />}
      {isMobile && <MobileGnb theme={theme} pathname={location.pathname} />}
      {children}
      {isMobile && (
        <footer
          className={classNames(
            footer,
            location.pathname.includes("designer") && light
          )}
        >
          <p>
            SEOUL WOMEN’S UNIVERSITY
            <br /> VISUAL COMMUNICATION DESIGN
          </p>
        </footer>
      )}
    </>
  );

  if (pageContext.layout === "designer") {
    return (
      <CommonLayout>
        <main className={designMain}>
          {!isMobile && <DesignerNav location={location} data={data?.list} />}
          {children}
        </main>
      </CommonLayout>
    );
  }

  return (
    <CommonLayout>
      <main className={main}>{children}</main>
    </CommonLayout>
  );
}
