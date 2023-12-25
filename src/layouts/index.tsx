import React, { ReactNode } from "react";
import DesktopGnb from "@/layouts/GNB/DesktopGnb";
import MobileGnb from "@/layouts/GNB/MobileGnb";
import {
  footer,
  main,
  designerWrapper,
  designerMain,
  light,
} from "./layout.module.scss";
import DesignerNav from "@/layouts/DesignerNav";
import { type PageProps } from "gatsby";
import useIsMobile from "@/hooks/useIsMobile";
import classNames from "classnames";

type LayoutProps = {
  children: ReactNode;
  location: any;
};

export default function CommonLayout({
  pageContext,
  children,
  location,
  data,
}: LayoutProps & React.FC<PageProps>) {
  const { pathname } = location;
  const isMobile = useIsMobile();

  const theme = pageContext.theme;

  const CommonLayout = ({ children }: { children: ReactNode }) => (
    <>
      {children}
      {isMobile && (
        <footer
          className={classNames(
            footer,
            location.pathname.includes("designer/") && light
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
        <div className={designerWrapper}>
          {!isMobile && (
            <DesktopGnb theme={theme} pathname={location.pathname} />
          )}
          {isMobile && <MobileGnb theme={theme} pathname={location.pathname} />}
          <main className={designerMain}>
            {!isMobile && (
              <DesignerNav
                uid={pageContext.uid}
                location={location}
                data={data?.list}
              />
            )}
            {children}
          </main>
        </div>
      </CommonLayout>
    );
  }

  if (pathname === "/") {
    return (
      <CommonLayout>
        <main className={main}>
          {isMobile && <MobileGnb theme={theme} pathname={location.pathname} />}
          {children}
        </main>
      </CommonLayout>
    );
  }

  return (
    <CommonLayout>
      <main className={main}>
        {!isMobile && <DesktopGnb theme={theme} pathname={location.pathname} />}
        {isMobile && <MobileGnb theme={theme} pathname={location.pathname} />}
        {children}
      </main>
    </CommonLayout>
  );
}
