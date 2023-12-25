import "./src/styles/global.scss";
// Logs when the client route changes

// export const onRouteUpdate = ({ location, prevLocation }) => {
//   // window.scrollTo(0, 0);
// };

// Wraps every page in a component
// export const wrapPageElement = ({ element, props }) => {
//   return <CommonLayout {...props}>{element} </CommonLayout>;
// };
// export const shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   const { pathname } = location;
//   // // list of routes for the scroll-to-top-hook
//   // const scrollToTopRoutes = [`/privacy-policy`, `/page-2`];
//   // // if the new route is part of the list above, scroll to top (0, 0)
//   // if (pathname.includes("/designer")) {
//   //   getSavedScrollPosition();
//   // } else {
//   //   window.scrollTo(0, 0);
//   // }
//   return false;
// };
