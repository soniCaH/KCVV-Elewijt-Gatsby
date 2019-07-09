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

const gatsbyNodePageQueries = require('./src/gatsby/gatsbyNodePageQueries')
const {
  createArticles,
  createPlayers,
  createStaff,
  createOverviewNews,
} = require('./src/gatsby/pageCreator')

const createPaginatedPages = require(`gatsby-paginate`)

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/templates/article.js`)
  const playerTemplate = path.resolve(`src/templates/player.js`)
  const staffTemplate = path.resolve(`src/templates/player-staff.js`)
  const newsOverviewTemplate = path.resolve(`src/templates/newsoverview.js`)
  const result = await wrapper(
    graphql(`
      query {
        ${gatsbyNodePageQueries}
      }
    `)
  )

  createArticles(result.data.articles.edges, createPage, articleTemplate)
  createPlayers(result.data.players.edges, createPage, playerTemplate)
  createStaff(result.data.staff.edges, createPage, staffTemplate)

  createOverviewNews(
    result.data.articles.edges,
    createPaginatedPages,
    createPage,
    newsOverviewTemplate,
    'news',
    20
  )
}
