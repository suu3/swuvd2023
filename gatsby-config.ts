import type { GatsbyConfig } from "gatsby";

//@ see https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules
const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.swuvd2023.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-pnpm",
    `gatsby-plugin-sass`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
  trailingSlash: `never`, // url 뒤 후행 슬래쉬 trailing slash
};

export default config;
