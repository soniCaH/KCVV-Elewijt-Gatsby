import { SponsorsResponsePropsApi } from "../Types/Gatsby"
import { CardImageOnly } from "./Card"
import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"

export const SponsorsBlock = () => {
  const { sponsors }: SponsorsResponsePropsApi = useStaticQuery(graphql`
    query {
      sponsors: allNodeSponsor(
        filter: { promote: { eq: true }, status: { eq: true }, field_type: { in: ["crossing", "green", "white"] } }
        sort: { fields: [field_type, title], order: ASC }
      ) {
        edges {
          node {
            title
            field_type
            field_website {
              uri
            }
            relationships {
              field_media_image {
                field_media_image {
                  alt
                }
                ...SponsorImage
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      {sponsors.edges.map(({ node }, i) => {
        const website = (node.field_website && node.field_website.uri) || ``
        return (
          <CardImageOnly
            key={i}
            picture={
              node.relationships.field_media_image.relationships.field_media_image.localFile.childImageSharp
                .gatsbyImageData
            }
            link={website}
          />
        )
      })}
      <Link to="/sponsors" className={`read-more`}>
        Alle sponsors &raquo;
      </Link>
    </>
  )
}
