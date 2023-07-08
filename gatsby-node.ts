import { type GatsbyNode } from "gatsby";
import path from "path";

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: <https://www.gatsbyjs.com/docs/node-apis/>
 */

// You can delete this file if you're not using it

// Setup Import Alias
export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  getConfig,
  actions,
}) => {
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

export const onCreatePage: GatsbyNode["onCreatePage"] = ({ page, actions }) => {
  const { createPage } = actions;

  if (page?.context) {
    if (page.path === "/") {
      page.context.theme = "light";
    } else {
      page.context.theme = "dark";
    }

    if (page.path.match("/designer")) {
      page.context.layout = "designer";

      createPage(page);
    }
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
      query AllProjectJsonQuery {
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

  // Get All Markdown File For Paging
  const queryAllDesignerJsonData = await graphql(
    `
      query AllDesignerJsonQuery {
        allDesignerJson {
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
  if (queryAllProjectJsonData.errors || queryAllDesignerJsonData.errors) {
    reporter.panicOnBuild(`Error while running query`);
    return;
  }

  // Import Post Template Component
  const ProjectTemplateComponent = path.resolve(
    __dirname,
    "src/templates/ProjectTemplate.tsx"
  );

  const DesignerTemplateComponent = path.resolve(
    __dirname,
    "src/templates/DesignerTemplate.tsx"
  );

  // Page Generating Function
  const generatePostProjectPage = ({
    node: { uid },
  }: {
    node: { uid: string };
  }) => {
    const pageOptions = {
      path: `/project/${uid}`,
      component: ProjectTemplateComponent,
      context: { uid },
    };

    createPage(pageOptions);
  };

  // Page Generating Function
  const generatePostDesignerPage = ({
    node: { uid },
  }: {
    node: { uid: string };
  }) => {
    const pageOptions = {
      path: `/designer/${uid}`,
      component: DesignerTemplateComponent,
      context: { uid, layout: "designer" },
    };

    createPage(pageOptions);
  };

  // Generate Post Page And Passing Slug Props for Query
  queryAllProjectJsonData?.data?.allProjectJson?.edges.forEach(
    generatePostProjectPage
  );

  queryAllDesignerJsonData?.data?.allDesignerJson?.edges.forEach(
    generatePostDesignerPage
  );
};
