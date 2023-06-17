import React, { ReactNode, useEffect, useState } from "react";
import GNB from "@/components/layout/GNB";

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

export default function CommonLayout({ children, location }: LayoutProps) {
  const { pathname } = location;
  console.log(location);
  const [theme, setTheme] = useState(pageTheme[pathname]);
  useEffect(() => {
    setTheme(pageTheme[pathname]);
  }, [pathname]);

  return (
    <>
      <GNB theme={theme} pathname={location.pathname} />

      {children}
    </>
  );
}
