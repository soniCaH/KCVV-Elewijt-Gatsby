import { graphql, Link } from "gatsby"
import { GatsbyImage, getSrc, StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Seo } from "../components/Seo"
import Layout from "../layouts"
import { StaffQuery } from "../Types/Player"
import "./Player.scss"

const Staff = ({ data: { nodeStaff } }: StaffQuery) => {
  const cleanBody =
    (nodeStaff?.body &&
      nodeStaff?.body?.processed?.replaceAll(`/sites/default/`, `${process.env.GATSBY_API_DOMAIN}/sites/default/`)) ||
    ``
  const picture = nodeStaff?.relationships?.field_image?.localFile?.childImageSharp?.gatsbyImageData && (
    <GatsbyImage
      image={nodeStaff?.relationships?.field_image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={`${nodeStaff.field_firstname} ${nodeStaff.field_lastname}`}
    />
  )

  return (
    <Layout>
      <div className="player__details__top">
        <header className="page_header__wrapper player__header__wrapper">
          <div className="page_header page_header--max player__header">
            <div className="player__header__inner">
              <div className="player__header__inner_text">
                <h1 className={`player__detail__name`}>
                  <span className={`player__detail__name_first`}>{nodeStaff.field_firstname}</span>
                  <span className={`player__detail__name_last`}>{nodeStaff.field_lastname}</span>
                </h1>
                <p
                  className={`player__detail__shirt_number`}
                  aria-hidden="true"
                  title={nodeStaff.field_position_staff || ``}
                >
                  {nodeStaff?.field_position_short || ``}
                </p>
              </div>
              <div className="player__header__inner_image">
                {picture || (
                  <StaticImage
                    src={`../images/kcvv-player-bg.png`}
                    alt={`${nodeStaff.field_firstname} ${nodeStaff.field_lastname}`}
                    placeholder={`tracedSVG`}
                  />
                )}
              </div>
            </div>
          </div>
        </header>
      </div>
      <main className="player__details__middle">
        {renderMeta(nodeStaff)}
        {cleanBody && <div dangerouslySetInnerHTML={{ __html: cleanBody }} className="player__details__intro" />}
      </main>
      {/* <PlayerDetail player={nodePlayer} /> */}
    </Layout>
  )
}

export const Head = ({ data: { nodeStaff } }: StaffQuery) => {
  const pathUrl = nodeStaff?.path?.alias || ``
  const heroImage = nodeStaff?.relationships?.field_image?.localFile?.childImageSharp?.gatsbyImageData

  const ogImage = heroImage && {
    src: getSrc(heroImage) || ``,
    width: heroImage.width,
    height: heroImage.height,
  }
  return (
    <Seo
      title={nodeStaff?.title || ``}
      path={pathUrl}
      image={ogImage}
      description={nodeStaff?.title + ` - Staflid van KCVV Elewijt`}
    />
  )
}

export default Staff

const renderMeta = (nodeStaff: Queries.node__staff) => {
  return (
    <div className="player__details__meta">
      <div className="player__details__meta__item player__details__meta__item--birthdate">
        <span className="player__details__meta__item__label">Geboortedatum</span>
        <span className="player__details__meta__item__data">{nodeStaff.field_birth_date || `Onbekend`}</span>
      </div>
      <div className="player__details__meta__item player__details__meta__item--position">
        <span className="player__details__meta__item__data">{nodeStaff.field_position_staff}</span>
        <span className="player__details__meta__item__label">
          {nodeStaff?.relationships?.node__team && (
            <Link to={nodeStaff?.relationships?.node__team[0]?.path?.alias || ``}>
              {nodeStaff?.relationships?.node__team[0]?.title}
            </Link>
          )}
        </span>
      </div>
      <div className="player__details__meta__item player__details__meta__item--joindate">
        <span className="player__details__meta__item__label">Aangesloten bij KCVV sinds</span>
        <span className="player__details__meta__item__data">{nodeStaff.field_join_date || `Onbekend`}</span>
      </div>
    </div>
  )
}

export const query = graphql`
  query StaffQuery($slug: String!) {
    nodeStaff(path: { alias: { eq: $slug } }) {
      path {
        alias
      }
      body {
        processed
      }
      title
      field_join_date
      field_lastname
      field_position_staff
      field_firstname
      field_birth_date
      field_position_short
      relationships {
        node__article {
          title
          path {
            alias
          }
          timestamp: created(formatString: "x")
          relationships {
            field_media_article_image {
              ...ArticleImage
            }
          }
        }
        node__team {
          title
          relationships {
            field_media_article_image {
              ...ArticleImage
            }
          }
          path {
            alias
          }
        }
        field_image {
          localFile {
            ...KCVVFixedPlayerTeaser
          }
        }
      }
    }
  }
`
