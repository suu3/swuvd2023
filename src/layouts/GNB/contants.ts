import { DESIGNER_URL, HOME_URL, PROJECT_URL } from "@/constants/serviceUrls";

export const menus = [
  {
    title: "ABOUT",
    link: HOME_URL,
  },
  {
    title: "PROJECT",
    link: PROJECT_URL,
  },
  {
    title: "DESIGNER",
    link: DESIGNER_URL,
  },
];

export type GNBType = { pathname: string; theme: "light" | "dark" };
