import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        backgroundColor: "red",
        margin: `0 auto`,
        maxWidth: 650,
        padding: `0 1rem`,
      }}
    >
      {children}
    </div>
  );
}
