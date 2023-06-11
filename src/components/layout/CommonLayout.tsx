import React, { ReactNode, useEffect, useState } from "react";
import GNB from "@/components/layout/GNB";

type LayoutProps = {
  children: ReactNode;
};

const pageTheme: {
  [key: string]: "light" | "dark";
} = {
  "/": "light",
  "/project": "dark",
  "/designer": "dark",
};

export default function CommonLayout({
  children,
  location: { pathname },
}: LayoutProps) {
  const [theme, setTheme] = useState(pageTheme[pathname]);
  useEffect(() => {
    setTheme(pageTheme[pathname]);
  }, [pathname]);

  return (
    <>
      <GNB theme={theme} pathname={location.pathname} />

      <main>{children}</main>
    </>
  );
}
