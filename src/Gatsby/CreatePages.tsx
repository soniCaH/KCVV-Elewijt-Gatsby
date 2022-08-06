import { Actions } from "gatsby"

export const createArticles = (
  list: Queries.node__articleEdge[],
  createPage: Actions["createPage"],
  template: string
) => {
  list.forEach(({ node }) => {
    createPage({
      path: node?.path?.alias || ``,
      component: template,
      context: {
        slug: node?.path?.alias || ``,
      },
    })
  })
}
