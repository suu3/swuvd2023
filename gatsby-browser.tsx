import "./src/styles/global.scss";
import { DESIGNER_URL } from "./src/constants/urls";

// Logs when the client route changes

// export const onRouteUpdate = ({ location, prevLocation }) => {
//   // window.scrollTo(0, 0);
// };

// Wraps every page in a component
// export const wrapPageElement = ({ element, props }) => {
//   return <CommonLayout {...props}>{element} </CommonLayout>;
// };
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const { pathname } = location;
  // // list of routes for the scroll-to-top-hook
  // const scrollToTopRoutes = [`/privacy-policy`, `/page-2`];
  // // if the new route is part of the list above, scroll to top (0, 0)
  if (pathname.includes(DESIGNER_URL)) {
    getSavedScrollPosition();
  } else {
    window.scrollTo(0, 0);
  }
  return false;
};
