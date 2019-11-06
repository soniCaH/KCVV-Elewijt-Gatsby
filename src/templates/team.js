import { graphql } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'
import Layout from '../layouts/index'
import Img from 'gatsby-image'
import { TeamSection } from '../components/team--section'
import './team.scss'
import Ranking from '../components/ranking'
import TeamCalendarMatches from '../components/team-calendar-matches'
import TeamCalendarMetaMatches from '../components/team-calendar-meta-matches'

const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key]
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
    return objectsByKeyValue
  }, {})
const groupByPosition = groupBy('field_position')

export default ({ data }) => {
  const node = data.nodeTeam

  const playersByPosition =
    node.relationships.field_players.length > 0 &&
    groupByPosition(node.relationships.field_players)
  const picture = node.relationships.field_media_article_image

  const teamPicture = picture && (
    <Img
      fluid={
        picture.relationships.field_media_image.localFile.childImageSharp.fluid
      }
      alt={picture.field_media_image.alt}
      className={'team-detail__team-picture'}
    />
  )

  return (
    <Layout>
      <SEO lang="nl-BE" title={node.title} />

      <article className={'team-detail'}>
        <header className={'team-detail__header'}>
          <h1 className={'team-detail__name'}>
            <span className={'team-detail__name-division'}>
              {node.field_division_full}
            </span>
            <span className={'team-detail__name-tagline'}>
              {node.field_tagline}
            </span>
          </h1>

          <div className={'bg-green-mask'}>
            <div className={'bg-white-end'} />
          </div>
          {node.field_fb_id && (
            <div className={'team-detail__division-number'} aria-hidden="true">
              {node.field_fb_id}
            </div>
          )}
        </header>

        <div className={'team-break'}></div>

        {(playersByPosition || node.field_fb_id) && (
          <>
            <section className={'team-sub_navigation'}>
              <ul
                className={'tabs team-sub_navigation__tabs '}
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
                {playersByPosition && (
                  <li className="tabs-title">
                    <a href="#team-lineup">Lineup</a>
                  </li>
                )}
                {node.field_fb_id && (
                  <>
                    {' '}
                    <li className={'tabs-title'}>
                      <a data-tabs-target="team-matches" href="#team-matches">
                        Wedstrijden
                      </a>
                    </li>
                    <li className={'tabs-title'}>
                      <a data-tabs-target="team-ranking" href="#team-ranking">
                        Stand
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </section>
          </>
        )}

        <div
          className={'tabs-content'}
          data-tabs-content="team-subnavigation_tabs"
        >
          <div className={'tabs-panel is-active'} id="team-info">
            {teamPicture || ''}
            {node.field_contact_info && (
              <div
                className={'team-detail__team-info'}
                dangerouslySetInnerHTML={{
                  __html: node.field_contact_info.processed,
                }}
              />
            )}
          </div>
          {node.relationships.field_staff && !playersByPosition && (
            <main
              className={'team-detail__lineup team-detail__lineup--staff-only'}
            >
              <TeamSection
                title="Stafleden"
                lineup={node.relationships.field_staff}
              />
            </main>
          )}
          {playersByPosition && node.relationships.field_staff && (
            <div className={'tabs-panel'} id="team-lineup">
              <main className={'team-detail__lineup'}>
                {node.relationships.field_staff && (
                  <TeamSection
                    title="Stafleden"
                    lineup={node.relationships.field_staff}
                  />
                )}
                {playersByPosition['k'] && (
                  <TeamSection
                    title="Doelmannen"
                    lineup={playersByPosition['k']}
                  />
                )}
                {playersByPosition['d'] && (
                  <TeamSection
                    title="Verdedigers"
                    lineup={playersByPosition['d']}
                  />
                )}
                {playersByPosition['m'] && (
                  <TeamSection
                    title="Middenvelder"
                    lineup={playersByPosition['m']}
                  />
                )}
                {playersByPosition['a'] && (
                  <TeamSection
                    title="Aanvallers"
                    lineup={playersByPosition['a']}
                  />
                )}
              </main>
            </div>
          )}
          {node.field_fb_id && (
            <>
              <div className={'tabs-panel'} id="team-matches">
                <TeamCalendarMetaMatches
                  season="1920"
                  region="bra"
                  division={node.field_fb_id}
                  regnumber="00055"
                />
                <TeamCalendarMatches
                  season="1920"
                  region="bra"
                  division={node.field_fb_id}
                />
              </div>
              <div className={'tabs-panel'} id="team-ranking">
                <Ranking
                  season="1920"
                  region="bra"
                  division={node.field_fb_id}
                  highlight="KCVV.Elewijt A"
                />
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
                childImageSharp {
                  fluid(maxWidth: 615) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
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
                childImageSharp {
                  fluid(maxWidth: 615) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
        field_media_article_image {
          ...ArticleImageLarge
          field_media_image {
            alt
          }
        }
      }
    }
  }
`
