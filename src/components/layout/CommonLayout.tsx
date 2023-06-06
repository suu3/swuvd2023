import React, { ReactNode } from "react";
import GNB from "@/components/layout/GNB";

type LayoutProps = {
  children: ReactNode;
};

export default function CommonLayout({ children }: LayoutProps) {
  return (
    <>
      <GNB pathname={location.pathname} />

      <main>{children}</main>
    </>
  );
}
