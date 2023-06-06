import React from "react";
import "./src/styles/global.scss";
import CommonLayout from "@/components/layout/CommonLayout";
// Logs when the client route changes

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname);
  console.log("old pathname", prevLocation ? prevLocation.pathname : null);
};

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <CommonLayout>{element} </CommonLayout>;
};
