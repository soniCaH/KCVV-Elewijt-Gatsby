// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

import * as dotenv from "dotenv"
dotenv.config({ path: __dirname + `/.env` })

import path from "path"

import type { GatsbyNode } from "gatsby"
import { gatsbyNodePageQueries } from "./src/Gatsby/PageQueries"

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await wrapper(
    graphql(`
      query {
        ${gatsbyNodePageQueries}
      }
    `)
  )

  const articlesTemplate = path.resolve(`./src/templates/Article.tsx`)

  console.log(result.data)
  console.log(result.data.articles)
  console.log(result.data.articles.edges)

  const createArticlesPromise = result.data.articles.edges.map(({ node }) => {
    createPage({
      path: node.path.alias || ``,
      component: articlesTemplate,
      context: {
        slug: node.path.alias || ``,
      },
    })
  })

  await Promise.all([createArticlesPromise])
}

// import { createArticles } from "./src/Gatsby/CreatePages"

// // const createPaginatedPages = require(`gatsby-paginate`)

// graphql function doesn't throw an error
// so we have to check to check for
// the result.errors to throw manually
const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

// export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
//   const { createPage } = actions
//   const articleTemplate = path.resolve(`src/templates/Article.tsx`)
//   // const pageTemplate = path.resolve(`src/templates/page.js`)
//   // const teamTemplate = path.resolve(`src/templates/team.js`)
//   // const playerTemplate = path.resolve(`src/templates/player.js`)
//   // const playerShareTemplate = path.resolve(`src/templates/player-share.js`)
//   // const staffTemplate = path.resolve(`src/templates/player-staff.js`)
//   // const newsOverviewTemplate = path.resolve(`src/templates/newsoverview.js`)
//   // const categoryTemplate = path.resolve(`src/templates/categoryPage.js`)
//   const result = await wrapper(
//     graphql(`
//       query {
//         ${gatsbyNodePageQueries}
//       }
//     `)
//   )

//   console.log(result.data.articles.edges)

//   createArticles(result.data.articles.edges, createPage, articleTemplate)
//   //   createPages(result.data.pages.edges, createPage, pageTemplate)
//   //   createTeams(result.data.teams.edges, createPage, teamTemplate)
//   //   createPlayers(result.data.players.edges, createPage, playerTemplate, playerShareTemplate)
//   //   createStaff(result.data.staff.edges, createPage, staffTemplate)

//   //   createOverviewNews(result.data.articles.edges, createPaginatedPages, createPage, newsOverviewTemplate, `news`, 18)

//   //   createCategoryPages(result.data.categories.edges, createPage, categoryTemplate)
//   // }

//   // exports.onCreatePage = async ({ page, actions }) => {
//   //   const { createPage } = actions

//   //   if (page.path.match(/^\/game\//)) {
//   //     createPage({
//   //       path: `/game/`,
//   //       matchPath: `/game/:id`,
//   //       component: path.resolve(`src/pages/game.js`),
//   //     })
//   //   }
// }
