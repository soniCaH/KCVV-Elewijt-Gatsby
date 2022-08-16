import { graphql } from "gatsby"
import { GatsbyImage, getSrc, StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Seo } from "../components/Seo"
import Layout from "../layouts"
import { TeamQuery } from "../Types/Team"
import ReactFitText from "@kennethormandy/react-fittext"

const Team = ({ data: { nodeTeam } }: TeamQuery) => {
  const heroImage = nodeTeam?.relationships?.field_media_article_image
  const teamPicture = heroImage?.relationships?.field_media_image?.localFile?.childImageSharp?.gatsbyImageData && (
    <GatsbyImage
      image={heroImage.relationships?.field_media_image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={heroImage?.field_media_image?.alt || ``}
      className={`team-detail__team-picture`}
    />
  )

  // Helper variable so we don't have to do the check over and over again.
  const hasDivision = nodeTeam?.field_fb_id || nodeTeam?.field_fb_id_2 || nodeTeam?.field_vv_id
  const articles = nodeTeam?.relationships?.node__article || []

  return (
    <Layout>
      <header className="page_header__wrapper">
        <div className="page_header">
          <h1 className={`team-detail__name`}>
            {/* > GEWESTELIJKE U13 K */}
            <span className={`team-detail__name-division`}>
              <ReactFitText compressor={1.5}>{nodeTeam?.field_division_full}</ReactFitText>
            </span>
            {/* > The A-team */}
            <span className={`team-detail__name-tagline`}>{nodeTeam?.field_tagline}</span>
          </h1>
          {hasDivision && (
            <div className={`team-detail__division-number`} aria-hidden="true">
              {nodeTeam?.field_fb_id_2 ? nodeTeam?.field_fb_id_2 : nodeTeam?.field_fb_id}
            </div>
          )}
          NAV LINKS RECHTS RANKING LINEUP
        </div>
      </header>
      <div className="page__header__image__wrapper">
        <div className="page__header__image__bg">{teamPicture}</div>
        <div className="page__header__image__hero">{teamPicture}</div>
      </div>
      <article className="page__wrapper team__wrapper"></article>
    </Layout>
  )
}

export default Team

export const Head = ({ data: { nodeTeam } }: TeamQuery) => {
  const pathUrl = nodeTeam?.path?.alias || ``
  const heroImage =
    nodeTeam?.relationships?.image_og?.relationships?.field_media_image?.localFile?.childImageSharp?.gatsbyImageData

  const ogImage = heroImage && {
    src: getSrc(heroImage) || ``,
    width: heroImage.width,
    height: heroImage.height,
  }
  return <Seo title={`${nodeTeam?.title} / ${nodeTeam?.field_division_full}`} path={pathUrl} image={ogImage} />
}

export const query = graphql`
  query TeamQuery($slug: String!) {
    nodeTeam(path: { alias: { eq: $slug } }) {
      path {
        alias
      }
      title
      field_contact_info {
        processed
      }
      field_fb_id
      field_fb_id_2
      field_vv_id
      field_division_full
      field_tagline
      relationships {
        field_staff {
          path {
            alias
          }
          field_position_short
          field_lastname
          field_firstname
          relationships {
            field_image {
              localFile {
                ...KCVVFluidPlayerTeaser
              }
            }
          }
        }
        field_players {
          path {
            alias
          }
          field_shirtnumber
          field_lastname
          field_firstname
          field_position
          relationships {
            field_image {
              localFile {
                ...KCVVFluidPlayerTeaser
              }
            }
          }
        }
        field_media_article_image {
          ...FullImage
          field_media_image {
            alt
          }
        }
        image_og: field_media_article_image {
          ...ArticleImage
        }
        node__article {
          title
          timestamp: created(formatString: "x")
          path {
            alias
          }
          relationships {
            field_media_article_image {
              ...ArticleImage
            }
          }
        }
      }
    }
  }
`
