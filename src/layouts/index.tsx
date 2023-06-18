import React, { ReactNode, useEffect, useState } from "react";
import GNB from "@/layouts/GNB";
import { main } from "./layout.module.scss";
import DesignerNav from "@/layouts/DesignerNav";

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
}: LayoutProps) {
  const { pathname } = location;
  const [theme, setTheme] = useState(pageTheme[pathname]);
  useEffect(() => {
    setTheme(pageTheme[pathname]);
  }, [pathname]);

  if (pageContext.layout === "designer") {
    return (
      <>
        <GNB theme={theme} pathname={location.pathname} />
        <main className={main}>
          <DesignerNav location={location} data={data?.list} />
          {children}
        </main>
      </>
    );
  }

  return (
    <>
      <GNB theme={theme} pathname={location.pathname} />
      <main>{children}</main>
    </>
  );
}
