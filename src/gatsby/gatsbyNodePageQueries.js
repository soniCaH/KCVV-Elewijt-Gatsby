const gatsbyNodePageQueries = `
articles: allNodeArticle(sort: {fields: created, order: DESC}) {
    edges {
        node {
            title
            created(formatString: "DD/MM/YYYY")
            path {
                alias
            }
            body {
                value
                format
                processed
                summary
            }
            relationships {
                field_media_article_image {
                    relationships {
                        field_media_image {
                            localFile {
                                childImageSharp {
                                    fluid(maxWidth: 800, quality: 75, cropFocus: ATTENTION) {
                                        base64
                                        aspectRatio
                                        tracedSVG
                                        aspectRatio
                                        src
                                        srcSet
                                        srcWebp
                                        srcSetWebp
                                        sizes
                                    }
                                }
                            }
                        }
                    }
                }
                field_tags {
                    name
                    path {
                        alias
                    }
                }
            }
        }
    }
}

pages: allNodePage {
    edges {
        node {
            title
            path {
                alias
            }
        }
    }
}

teams: allNodeTeam {
    edges {
        node {
            title
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

staff: allNodeStaff {
    edges {
        node {
            title
            path {
                alias
            }
        }
    }
}

categories: allTaxonomyTermCategory {
    edges {
        node {
            name
            path {
                alias
            }
        }
    }
}
`

module.exports = gatsbyNodePageQueries
