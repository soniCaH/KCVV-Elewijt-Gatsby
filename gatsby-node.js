/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require('dotenv').config({
  path: `.env`,
})
const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve(`src/templates/article.js`)

  // Query for recipe nodes to use in creating pages.
  return graphql(
    `
      {
        allNodeArticle {
          edges {
            node {
              path {
                alias
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // Create pages for each recipe.
    result.data.allNodeArticle.edges.forEach(({ node }) => {
      createPage({
        path: node.path.alias,
        component: articleTemplate,
        context: {
          slug: node.path.alias,
        },
      })
    })
  })
}
