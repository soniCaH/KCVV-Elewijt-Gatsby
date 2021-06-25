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
                                    gatsbyImageData(
                                        width: 960
                                        placeholder: DOMINANT_COLOR
                                        layout: CONSTRAINED
                                        aspectRatio: 1.5
                                        transformOptions: { cropFocus: ATTENTION }
                                    )
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
