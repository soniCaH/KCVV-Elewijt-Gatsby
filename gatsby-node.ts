import * as dotenv from "dotenv"
dotenv.config({ path: __dirname + `/.env` })

import path from "path"

import type { GatsbyNode } from "gatsby"
import { gatsbyNodePageQueries } from "./src/Gatsby/PageQueries"
import createPaginatedPages from "gatsby-paginate"

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
  const createArticlesPromise = result.data.articles.edges.map(({ node }) => {
    createPage({
      path: node.path.alias || ``,
      component: articlesTemplate,
      context: {
        slug: node.path.alias || ``,
      },
    })
  })

  const newsOverviewTemplate = path.resolve(`./src/templates/NewsOverview.tsx`)
  const createNewsOverviewPromise = createPaginatedPages({
    edges: result.data.articles.edges,
    createPage,
    pageTemplate: newsOverviewTemplate,
    pageLength: 18,
    pathPrefix: `news`,
  })

  const newsTagPageTemplate = path.resolve(`./src/templates/NewsTagPage.tsx`)
  const createNewsTagPagePromise = result.data.categories.edges.map(({ node }) => {
    createPage({
      path: node.path.alias,
      component: newsTagPageTemplate,
      context: {
        slug: node.path.alias,
      },
    })
  })

  const pageTemplate = path.resolve(`src/templates/Page.tsx`)
  const createPagePromise = result.data.pages.edges.map(({ node }) => {
    createPage({
      path: node.path.alias,
      component: pageTemplate,
      context: {
        slug: node.path.alias,
      },
    })
  })

  const teamTemplate = path.resolve(`src/templates/Team.tsx`)
  const createTeamPromise = result.data.teams.edges.map(({ node }) => {
    createPage({
      path: node.path.alias,
      component: teamTemplate,
      context: {
        slug: node.path.alias,
      },
    })
  })

  const playerTemplate = path.resolve(`src/templates/Player.tsx`)
  const playerShareTemplate = path.resolve(`src/templates/PlayerShare.tsx`)
  const createPlayerPromise = result.data.players.edges.map(({ node }) => {
    createPage({
      path: node.path.alias,
      component: playerTemplate,
      context: {
        slug: node.path.alias,
      },
    })
    createPage({
      path: `${node.path.alias}/share`,
      component: playerShareTemplate,
      context: {
        slug: node.path.alias,
      },
    })
  })

  const staffTemplate = path.resolve(`src/templates/Staff.tsx`)
  const createStaffPromise = result.data.staff.edges.map(({ node }) => {
    createPage({
      path: node.path.alias,
      component: staffTemplate,
      context: {
        slug: node.path.alias,
      },
    })
  })

  await Promise.all([
    createArticlesPromise,
    createNewsOverviewPromise,
    createNewsTagPagePromise,
    createPagePromise,
    createTeamPromise,
    createPlayerPromise,
    createStaffPromise,
  ])
}

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

export const onCreatePage: GatsbyNode["onCreatePage"] = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/game\//)) {
    createPage({
      path: `/game/`,
      matchPath: `/game/:matchId`,
      component: path.resolve(`src/pages/game.tsx`),
    })
  }
}
