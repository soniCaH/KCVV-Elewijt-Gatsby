/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require("dotenv").config({
  path: `.env`,
})
const path = require(`path`)

const gatsbyNodePageQueries = require("./src/gatsby/gatsbyNodePageQueries")
const {
  createArticles,
  createPages,
  createTeams,
  createPlayers,
  createStaff,
  createOverviewNews,
  createCategoryPages,
} = require("./src/gatsby/pageCreator")

const createPaginatedPages = require(`gatsby-paginate`)

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/templates/Article.tsx`)
  const pageTemplate = path.resolve(`src/templates/page.js`)
  const teamTemplate = path.resolve(`src/templates/team.js`)
  const playerTemplate = path.resolve(`src/templates/player.js`)
  const staffTemplate = path.resolve(`src/templates/player-staff.js`)
  const newsOverviewTemplate = path.resolve(`src/templates/newsoverview.js`)
  const categoryTemplate = path.resolve(`src/templates/categoryPage.js`)
  const result = await wrapper(
    graphql(`
      query {
        ${gatsbyNodePageQueries}
      }
    `)
  )

  createArticles(result.data.articles.edges, createPage, articleTemplate)
  createPages(result.data.pages.edges, createPage, pageTemplate)
  createTeams(result.data.teams.edges, createPage, teamTemplate)
  createPlayers(result.data.players.edges, createPage, playerTemplate)
  createStaff(result.data.staff.edges, createPage, staffTemplate)

  createOverviewNews(
    result.data.articles.edges,
    createPaginatedPages,
    createPage,
    newsOverviewTemplate,
    "news",
    18
  )

  createCategoryPages(
    result.data.categories.edges,
    createPage,
    categoryTemplate
  )
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/game\//)) {
    createPage({
      path: "/game/",
      matchPath: "/game/:id",
      component: path.resolve(`src/pages/game.js`),
    })
  }
}
