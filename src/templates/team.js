import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import Layout from "../layouts/index"
import Img from "gatsby-image"
import { TeamSection } from "../components/team--section"
import "./team.scss"
import Ranking from "../components/ranking"
import TeamCalendarMatches from "../components/team-calendar-matches"
import TeamCalendarMetaMatches from "../components/team-calendar-meta-matches"

// Generic helper function to group an array by a property.
const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key]
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
    return objectsByKeyValue
  }, {})

// Specific implementation of our groupBy function, to group by a property "field_position".
const groupByPosition = groupBy("field_position")

export default ({ data }) => {
  const node = data.nodeTeam

  // If we have players, group them by their position.
  const playersByPosition =
    node.relationships.field_players.length > 0 &&
    groupByPosition(node.relationships.field_players)

  const picture = node.relationships.field_media_article_image
  // Create a fluid/responsive team image instance.
  const teamPicture = picture && (
    <Img
      fluid={
        picture.relationships.field_media_image.localFile.childImageSharp.fluid
      }
      alt={picture.field_media_image.alt}
      className={"team-detail__team-picture"}
    />
  )

  // Helper variable so we don't have to do the check over and over again.
  const hasDivision = node.field_fb_id || node.field_fb_id_2

  return (
    <Layout>
      <SEO lang="nl-BE" title={node.title} />

      <article className={"team-detail"}>
        <header className={"team-detail__header"}>
          <h1 className={"team-detail__name"}>
            {/* > GEWESTELIJKE U13 K */}
            <span className={"team-detail__name-division"}>
              {node.field_division_full}
            </span>
            {/* > The A-team */}
            <span className={"team-detail__name-tagline"}>
              {node.field_tagline}
            </span>
          </h1>

          <div className={"bg-green-mask"}>
            <div className={"bg-white-end"} />
          </div>

          {/* > 2A, 2G9K... */}
          {/* FB ID if only one of either is set, FB ID 2 if it has a value (will only be published around new year's, so it's always the most relevant as soon as it's known) */}
          {hasDivision && (
            <div className={"team-detail__division-number"} aria-hidden="true">
              {node.field_fb_id_2 ? node.field_fb_id_2 : node.field_fb_id}
            </div>
          )}
        </header>

        <div className={"team-break"}></div>

        {/* Only show tab links if there are either players assigned to the team, or the team has an (active) division, so we can show rankings/matches */}
        {(playersByPosition || hasDivision) && (
          <section className={"team-sub_navigation"}>
            {/* Foundation tabs structure */}
            <ul
              className={"tabs team-sub_navigation__tabs "}
              data-tabs
              data-deep-link="true"
              data-update-history="true"
              data-deep-link-smudge="true"
              data-deep-link-smudge-delay="500"
              id="team-subnavigation_tabs"
            >
              <li className="tabs-title is-active">
                <a href="#team-info">Info</a>
              </li>
              {/* Youth teams don't have lineups, so we don't show the tab link. */}
              {playersByPosition && (
                <li className="tabs-title">
                  <a href="#team-lineup">Lineup</a>
                </li>
              )}
              {hasDivision && (
                <>
                  <li className={"tabs-title"}>
                    <a data-tabs-target="team-matches" href="#team-matches">
                      Wedstrijden
                    </a>
                  </li>
                  <li className={"tabs-title"}>
                    <a data-tabs-target="team-ranking" href="#team-ranking">
                      Stand
                    </a>
                  </li>
                </>
              )}
            </ul>
          </section>
        )}

        {/* Foundation content of the tabs. */}
        <div
          className={"tabs-content"}
          data-tabs-content="team-subnavigation_tabs"
        >
          <div className={"tabs-panel is-active"} id="team-info">
            {teamPicture || ""}
            {node.field_contact_info && (
              <div
                className={"team-detail__team-info"}
                dangerouslySetInnerHTML={{
                  __html: node.field_contact_info.processed,
                }}
              />
            )}
          </div>
          {/* If our page displays staff only (e.g. the "board" page), we change the title. */}
          {node.relationships.field_staff && !playersByPosition && (
            <main
              className={"team-detail__lineup team-detail__lineup--staff-only"}
            >
              <TeamSection
                title="Stafleden"
                lineup={node.relationships.field_staff}
              />
            </main>
          )}
          {playersByPosition && (
            <div className={"tabs-panel"} id="team-lineup">
              <main className={"team-detail__lineup"}>
                {node.relationships.field_staff && (
                  <TeamSection
                    title="Stafleden"
                    lineup={node.relationships.field_staff}
                  />
                )}
                {playersByPosition["k"] && (
                  <TeamSection
                    title="Doelmannen"
                    lineup={playersByPosition["k"]}
                  />
                )}
                {playersByPosition["d"] && (
                  <TeamSection
                    title="Verdedigers"
                    lineup={playersByPosition["d"]}
                  />
                )}
                {playersByPosition["m"] && (
                  <TeamSection
                    title="Middenvelder"
                    lineup={playersByPosition["m"]}
                  />
                )}
                {playersByPosition["a"] && (
                  <TeamSection
                    title="Aanvallers"
                    lineup={playersByPosition["a"]}
                  />
                )}
              </main>
            </div>
          )}
          {hasDivision && (
            <>
              <div className={"tabs-panel"} id="team-matches">
                {node.field_fb_id_2 && (
                  <div className={"team-ranking__wrapper"}>
                    {node.field_fb_id && <h2>Wedstrijden na nieuwjaar</h2>}

                    {/* Metamatches is the big banner on top with the previous and next match highlighted. */}
                    {!node.field_fb_id && (
                      <TeamCalendarMetaMatches
                        season="1920"
                        region="bra"
                        division={node.field_fb_id_2}
                        regnumber="00055"
                      />
                    )}

                    <TeamCalendarMatches
                      season="1920"
                      region="bra"
                      division={node.field_fb_id_2}
                    />
                  </div>
                )}
                {node.field_fb_id && (
                  <div className={"team-ranking__wrapper"}>
                    {node.field_fb_id_2 && <h2>Wedstrijden voor nieuwjaar</h2>}

                    {/* Metamatches is the big banner on top with the previous and next match highlighted. */}
                    {!node.field_fb_id_2 && (
                      <TeamCalendarMetaMatches
                        season="1920"
                        region="bra"
                        division={node.field_fb_id}
                        regnumber="00055"
                      />
                    )}

                    <TeamCalendarMatches
                      season="1920"
                      region="bra"
                      division={node.field_fb_id}
                    />
                  </div>
                )}
              </div>
              <div className={"tabs-panel"} id="team-ranking">
                {node.field_fb_id_2 && (
                  <div className={"team-ranking__wrapper"}>
                    {node.field_fb_id && <h2>Ranking na nieuwjaar</h2>}
                    <Ranking
                      season="1920"
                      region="bra"
                      division={node.field_fb_id_2}
                      highlight="KCVV.Elewijt A"
                    />
                  </div>
                )}
                {node.field_fb_id && (
                  <div className={"team-ranking__wrapper"}>
                    {node.field_fb_id_2 && <h2>Ranking voor nieuwjaar</h2>}
                    <Ranking
                      season="1920"
                      region="bra"
                      division={node.field_fb_id}
                      highlight="KCVV.Elewijt A"
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
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
          ...ArticleImage
          field_media_image {
            alt
          }
        }
      }
    }
  }
`
