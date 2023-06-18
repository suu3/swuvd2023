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

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;
//   const typeDefs = `
//     type DesignerJson implements Node {
//       uid: String
//       title: String
//       authors: [String]
//       about: String
//       project_image: Node
//       project: ProjectJson
//     }

//   `;
//   createTypes(typeDefs);
// };
