import { graphql } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'
import Layout from '../layouts/index'
import { TeamSection } from '../components/team--section'
import './team.scss'

const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key]
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
    return objectsByKeyValue
  }, {})
const groupByPosition = groupBy('field_position')

export default ({ data }) => {
  const node = data.nodeTeam

  const playersByPosition = groupByPosition(node.relationships.field_players)

  return (
    <Layout>
      <SEO lang="nl-BE" title={node.title} />

      <article className={'team-detail'}>
        <header className={'team-detail__header'}>
          <h1 className={'team-detail__name'}>
            <span className={'team-detail__name-division'}>
              2e provinciale A
            </span>
            <span className={'team-detail__name-tagline'}>The A Team</span>
          </h1>

          <div className={'bg-green-mask'}>
            <div className={'bg-white-end'} />
          </div>

          <div className={'team-detail__division-number'} aria-hidden="true">
            2A
          </div>
        </header>

        <div className={'team-break'}></div>

        <section className={'team-sub_navigation'}>
          <ul
            className={'tabs team-sub_navigation__tabs '}
            data-tabs
            id="team-subnavigation_tabs"
          >
            <li className="tabs-title is-active">
              <a href="#team-info">
                Info
              </a>
            </li>
            <li className="tabs-title">
              <a href="#team-lineup">Lineup</a>
            </li>
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
          </ul>
        </section>

        <div
          className={'tabs-content'}
          data-tabs-content="team-subnavigation_tabs"
        >
          <div className={'tabs-panel is-active'} id="team-info">
            Groepsfoto + contactgegevens.
          </div>
          <div className={'tabs-panel'} id="team-lineup">
            <main className={'team-detail__lineup'}>
              {node.relationships.field_staff && (
                <TeamSection
                  title="Stafleden"
                  lineup={node.relationships.field_staff}
                />
              )}
              {playersByPosition['d'] && (
                <TeamSection
                  title="Doelmannen"
                  lineup={playersByPosition['k']}
                />
              )}
              {playersByPosition['v'] && (
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
          <div className={'tabs-panel'} id="team-matches">
            GAMES
          </div>
          <div className={'tabs-panel'} id="team-ranking">
            RANKING
          </div>
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
      }
    }
  }
`
