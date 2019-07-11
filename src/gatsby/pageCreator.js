const createArticles = (list, createPage, template) => {
  list.forEach(({ node }) => {
    createPage({
      path: node.path.alias,
      component: template,
      context: {
        slug: node.path.alias,
      },
    })
  })
}

const createPlayers = (list, createPage, template) => {
  list.forEach(({ node }) => {
    createPage({
      path: node.path.alias,
      component: template,
      context: {
        slug: node.path.alias,
      },
    })
  })
}

const createStaff = (list, createPage, template) => {
  list.forEach(({ node }) => {
    createPage({
      path: node.path.alias,
      component: template,
      context: {
        slug: node.path.alias,
      },
    })
  })
}

const createOverviewNews = (
  list,
  createPaginatedPages,
  createPage,
  template,
  pathPrefix,
  itemsPerPage
) => {
  createPaginatedPages({
    edges: list,
    createPage,
    pageTemplate: template,
    pageLength: itemsPerPage,
    pathPrefix,
    buildPath: (index, pathPrefix) =>
      index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`,
  })
}

const createCategoryPages = (list, createPage, template) => {
  list.forEach(({ node }) => {
    createPage({
      path: node.path.alias,
      component: template,
      context: {
        slug: node.path.alias,
      },
    })
  })
}

module.exports = {
  createArticles,
  createPlayers,
  createStaff,
  createOverviewNews,
  createCategoryPages,
}
