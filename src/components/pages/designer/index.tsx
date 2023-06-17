import React from "react";
import DesignerNav from "@/components/layout/DesignerNav";
import { main } from "./desinger.module.scss";

const Designer = (props) => {
  return (
    <main className={main}>
      <DesignerNav {...props} />
    </main>
  );
};

export default Designer;
