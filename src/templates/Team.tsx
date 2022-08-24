import { TeamQuery } from "../Types/Team"
import Lineup from "../components/Lineup"
import { Seo } from "../components/Seo"
import TeamStats from "../components/TeamStats"
import Layout from "../layouts"
import "./Team.scss"
import ReactFitText from "@kennethormandy/react-fittext"
import { graphql } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import React from "react"
import { MatchTeasers } from "../components/MatchTeaser"
import Matches from "../components/Matches"
import { AltTitle } from "../components/AltTitle"
import { Ranking } from "../components/Ranking"
import RelatedNews from "../components/RelatedNews"

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
  const hasDivision = nodeTeam?.field_vv_id
  const articles = nodeTeam?.relationships?.node__article || []

  console.log(nodeTeam?.relationships?.node__article)

  const allPlayers = [...(nodeTeam?.relationships?.field_players || [])]

  // Specific implementation of our groupBy function, to group by a property "field_position".
  const groupByPosition = groupBy(allPlayers, (v) => v?.field_position || ``)

  return (
    <Layout>
      <header className="page_header__wrapper page_header__wrapper--inset-large">
        <div className="page_header">
          <h1 className="team__header__name">
            {/* > GEWESTELIJKE U13 K */}
            <span className="team__header_name__division">
              <ReactFitText compressor={1.5}>{nodeTeam?.field_division_full}</ReactFitText>
            </span>
            {/* > The A-team */}
            <span className="team__header_name__division__tagline">{nodeTeam?.field_tagline}</span>
          </h1>
          {hasDivision && (
            <div className="team__header_name__division__number" aria-hidden="true">
              {nodeTeam?.field_fb_id}
            </div>
          )}
        </div>
      </header>
      {(allPlayers.length > 0 || hasDivision) && (
        <nav className="team__sub_navigation">
          {/* Foundation tabs structure */}
          <ul
            className="tabs team__sub_navigation__tabs"
            data-tabs
            data-deep-link="true"
            data-update-history="true"
            data-deep-link-smudge="true"
            data-deep-link-smudge-delay="500"
            id="team-subnavigation_tabs"
          >
            <li className="tabs-title is-active">
              <a href="#team-info" className="rich-link-center">
                Info
              </a>
            </li>
            {/* Youth teams don't have lineups, so we don't show the tab link. */}
            {allPlayers.length > 0 && (
              <li className="tabs-title">
                <a href="#team-lineup" className="rich-link-center">
                  Lineup
                </a>
              </li>
            )}
            {hasDivision && (
              <>
                <li className={`tabs-title`}>
                  <a data-tabs-target="team-matches" href="#team-matches" className="rich-link-center">
                    Wedstrijden
                  </a>
                </li>
                <li className={`tabs-title`}>
                  <a data-tabs-target="team-ranking" href="#team-ranking" className="rich-link-center">
                    Stand
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
      <article className="page__wrapper team__wrapper">
        <div className="tabs-content" data-tabs-content="team-subnavigation_tabs">
          <div className="tabs-panel is-active" id="team-info">
            <div className="team_info__hero_image">{teamPicture || ``}</div>
            {nodeTeam?.field_contact_info && (
              <div
                className={`team_info__contact page__wrapper page__wrapper--limited`}
                dangerouslySetInnerHTML={{
                  __html: nodeTeam?.field_contact_info.processed || ``,
                }}
              />
            )}
            {nodeTeam?.field_vv_id && <TeamStats teamId={+nodeTeam?.field_vv_id} />}
            {nodeTeam?.relationships?.field_staff && allPlayers.length <= 0 && (
              <main className={`team-detail__lineup team-detail__lineup--staff-only`}>
                <Lineup lineup={nodeTeam?.relationships?.field_staff} />
              </main>
            )}

            {articles && <RelatedNews items={[...articles]} limit={6} />}
          </div>
          {allPlayers.length > 0 && (
            <div className={`tabs-panel`} id="team-lineup">
              <main className={`team-detail__lineup`}>
                {nodeTeam?.relationships?.field_staff && <Lineup lineup={nodeTeam.relationships.field_staff} />}
                {groupByPosition[`k`] && <Lineup title="Doelmannen" lineup={groupByPosition[`k`]} />}
                {groupByPosition[`d`] && <Lineup title="Verdedigers" lineup={groupByPosition[`d`]} />}
                {groupByPosition[`m`] && <Lineup title="Middenvelder" lineup={groupByPosition[`m`]} />}
                {groupByPosition[`a`] && <Lineup title="Aanvallers" lineup={groupByPosition[`a`]} />}
              </main>
            </div>
          )}
          {hasDivision && (
            <>
              <div className={`tabs-panel`} id="team-matches">
                {nodeTeam?.field_vv_id && <MatchTeasers teamId={+nodeTeam?.field_vv_id} />}
                {nodeTeam?.field_vv_id && (
                  <>
                    <AltTitle title="KALENDER" variant="white" />
                    <Matches teamId={+nodeTeam?.field_vv_id} />
                  </>
                )}
              </div>
              <div className={`tabs-panel`} id="team-ranking">
                {nodeTeam?.field_vv_id && <Ranking teamId={+nodeTeam?.field_vv_id} />}
              </div>
            </>
          )}
        </div>
      </article>
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

const groupBy = <T, K extends keyof T>(array: T[], groupOn: K | ((i: T) => string)): Record<string, T[]> => {
  const groupFn = typeof groupOn === `function` ? groupOn : (o: T) => o[groupOn]

  return Object.fromEntries(
    array.reduce((acc, obj) => {
      const groupKey = groupFn(obj)
      return acc.set(groupKey, [...(acc.get(groupKey) || []), obj])
    }, new Map())
  ) as Record<string, T[]>
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
