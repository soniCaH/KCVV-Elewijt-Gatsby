const gatsbyNodePageQueries = `
articles: allNodeArticle {
    edges {
        node {
            title
            changed
            body {
                processed
            }
            path {
                alias
            }
        }
    }
}

players: allNodePlayer {
    edges {
        node {
            title
            path {
                alias
            }
        }
    }
}
`

module.exports = gatsbyNodePageQueries
