import type { GatsbyConfig } from "gatsby";

//@ see https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules
const config: GatsbyConfig = {
  siteMetadata: {
    title: "금 : 線",
    description: "서울여자대학교 시각디자인전공 40회 졸업전시회",
    siteUrl: `https://www.swuvd2023.com`,
    og: {
      siteName: "금 : 線 | 서울여자대학교 시각디자인전공 40회 졸업전시회",
    },
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "`https://www.swuvd2023.com",
        sitemap: "`https://www.swuvd2023.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-pnpm",
    `gatsby-plugin-sass`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `./src/images/favicon.svg`,
      },
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    "gatsby-plugin-mdx",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    `gatsby-plugin-layout`,
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        height: 3,
        prependToBody: false,
        color: `#ffbe39`,
      },
    },
    "gatsby-plugin-sitemap",
  ],
  trailingSlash: `never`, // url 뒤 후행 슬래쉬 trailing slash
};

export default config;
