import { type GatsbyNode } from "gatsby";

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: <https://www.gatsbyjs.com/docs/node-apis/>
 */

// You can delete this file if you're not using it

const path = require("path");

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path === "/") {
    page.context.theme = "light";
  } else {
    page.context.theme = "dark";
  }

  if (page.path.match(/designer/)) {
    page.context.layout = "designer";

    createPage(page);
  }
};

// Generate Post Page Through Markdown Data
export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;

  // Get All Markdown File For Paging
  const queryAllProjectJsonData = await graphql(
    `
      {
        allProjectJson {
          edges {
            node {
              uid
            }
          }
        }
      }
    `
  );

  // Handling GraphQL Query Error
  if (queryAllProjectJsonData.errors) {
    reporter.panicOnBuild(`Error while running query`);
    return;
  }

  // Import Post Template Component
  const ProjectTemplateComponent = path.resolve(
    __dirname,
    "src/templates/ProjectTemplate.tsx"
  );

  // Page Generating Function
  const generatePostPage = ({ node: { uid } }: { node: { uid: string } }) => {
    const pageOptions = {
      path: `/project/${uid}`,
      component: ProjectTemplateComponent,
      context: { uid },
    };

    createPage(pageOptions);
  };

  // Generate Post Page And Passing Slug Props for Query
  queryAllProjectJsonData?.data?.allProjectJson.edges.forEach(generatePostPage);
};
