import React from "react";
import DesignerNav from "@/components/layout/DesignerNav";
import { main } from "./desinger.module.scss";

const Designer = () => {
  return (
    <main className={main}>
      <DesignerNav />
    </main>
  );
};

export default Designer;
