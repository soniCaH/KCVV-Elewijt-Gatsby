import { graphql, Link } from "gatsby"
import { GatsbyImage, getSrc, StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState, Suspense } from "react"
import { Card } from "../components/Card"
import Icon from "../components/Icon"
import { Seo } from "../components/Seo"
import { useSiteMetaData } from "../hooks/use-site-metadata"
import Layout from "../layouts"
import moment from "moment"
import "moment/locale/nl-be"
import { mapPositionCode, request } from "../scripts/helper"
import {
  PlayerQuery,
  PlayerStatsDataObject,
  PlayerStatsDataResponseObject,
  PlayerStatsReportsResponseObject,
} from "../Types/Player"
import "./Player.scss"
import iconCardRed from "../images/i_card_red.png"
import iconCardYellow from "../images/i_card_yellow.png"
import iconCleansheet from "../images/i_cleansheet.png"
import iconGoal from "../images/i_goal.png"
const RelatedNews = React.lazy(() => import("../components/RelatedNews"));

const Player = ({ data: { nodePlayer } }: PlayerQuery) => {
  const cleanBody =
    (nodePlayer?.body &&
      nodePlayer?.body?.processed?.replaceAll(`/sites/default/`, `${process.env.GATSBY_API_DOMAIN}/sites/default/`)) ||
    ``
  const picture = nodePlayer?.relationships?.field_image?.localFile?.childImageSharp?.gatsbyImageData && (
    <GatsbyImage
      image={nodePlayer?.relationships?.field_image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={`${nodePlayer.field_firstname} ${nodePlayer.field_lastname}`}
    />
  )

  const [data, setData] = useState<PlayerStatsDataObject>()
  const [loading, setLoading] = useState<boolean>(true)
  const { kcvvPsdApi } = useSiteMetaData()
  const playerId = nodePlayer.field_vv_id

  useEffect(() => {
    async function getData() {
      const response = await request.get(`${kcvvPsdApi}/stats/player/${playerId}`)
      setData(response.data)
      setLoading(false)
    }
    getData()
  }, [kcvvPsdApi, playerId])

  const team = nodePlayer.relationships?.node__team || []
  const articles = nodePlayer.relationships?.node__article || []

  return (
    <Layout>
      <div className="player__details__top">
        <header className="page_header__wrapper player__header__wrapper">
          <div className="page_header page_header--max player__header">
            <div className="player__header__inner">
              <div className="player__header__inner_text">
                <h1 className={`player__detail__name`}>
                  <span className={`player__detail__name_first`}>{nodePlayer.field_firstname}</span>
                  <span className={`player__detail__name_last`}>{nodePlayer.field_lastname}</span>
                </h1>
                <p className={`player__detail__shirt_number`} aria-hidden="true">
                  {nodePlayer?.field_shirtnumber || ``}
                </p>
              </div>
              <div className="player__header__inner_image">
                {picture || (
                  <StaticImage
                    src={`../images/kcvv-player-bg.png`}
                    alt={`${nodePlayer.field_firstname} ${nodePlayer.field_lastname}`}
                    placeholder={`blurred`}
                  />
                )}
              </div>
            </div>
          </div>
        </header>
        {!loading && renderStats(data?.playerStatistics || [], nodePlayer.field_position || ``)}
      </div>
      <main className="player__details__middle">
        {renderMeta(nodePlayer)}
        {cleanBody && <div dangerouslySetInnerHTML={{ __html: cleanBody }} className="player__details__intro" />}
      </main>

      <footer className="player__details__bottom">
        {renderPlayerStatsFull(data?.playerStatistics || [])}
        {renderPlayerGamesFull(data?.gameReports || [])}
      </footer>

      {(team || articles) && (
        <aside className="player__details__related_news page__wrapper">
          <Suspense fallback={<div>Loading...</div>}>
            <RelatedNews items={[...team, ...articles]} limit={6} />
          </Suspense>
        </aside>
      )}

      {/* <PlayerDetail player={nodePlayer} /> */}
    </Layout>
  )
}

export const Head = ({ data: { nodePlayer } }: PlayerQuery) => {
  const pathUrl = nodePlayer?.path?.alias || ``
  const heroImage = nodePlayer?.relationships?.field_image?.localFile?.childImageSharp?.gatsbyImageData

  const ogImage = heroImage && {
    src: getSrc(heroImage) || ``,
    width: heroImage.width,
    height: heroImage.height,
  }
  return (
    <Seo
      title={nodePlayer?.title || ``}
      path={pathUrl}
      image={ogImage}
      description={nodePlayer?.title + ` - (ex-)speler van KCVV Elewijt`}
    />
  )
}

export default Player

const renderStats = (playerStatistics: PlayerStatsDataResponseObject[], playerPosition = ``) => (
  <aside className="player__stats">
    <section className="player__stats__item">
      <div className="player__stats__item__number">
        {playerStatistics.reduce((a, b) => a + (b?.gamesPlayed || 0), 0) || `0`}
      </div>
      <div className="player__stats__item__label">Wedstrijden</div>
    </section>
    {(playerPosition === `k` || playerPosition === `d`) && (
      <section className="player__stats__item">
        <div className="player__stats__item__number">
          {playerStatistics.reduce((a, b) => a + (b?.cleanSheets || 0), 0) || `0`}
        </div>
        <div className="player__stats__item__label">Cleansheets</div>
      </section>
    )}
    <section className="player__stats__item">
      <div className="player__stats__item__number">
        {playerStatistics.reduce((a, b) => a + (b?.goals || 0), 0) || `0`}
      </div>
      <div className="player__stats__item__label">Doelpunten</div>
    </section>
    <section className="player__stats__item">
      <div className="player__stats__item__number">
        {playerStatistics.reduce((a, b) => a + (b?.yellowCards || 0), 0) || `0`}
      </div>
      <div className="player__stats__item__label">Gele kaarten</div>
    </section>
    <section className="player__stats__item">
      <div className="player__stats__item__number">
        {playerStatistics.reduce((a, b) => a + (b?.redCards || 0), 0) || `0`}
      </div>
      <div className="player__stats__item__label">Rode kaarten</div>
    </section>
  </aside>
)

const renderMeta = (nodePlayer: Queries.node__player) => {
  const currentlyPlaying = !nodePlayer.field_date_leave
  return (
    <div className="player__details__meta">
      <div className="player__details__meta__item player__details__meta__item--birthdate">
        <span className="player__details__meta__item__label">Geboortedatum</span>
        <span className="player__details__meta__item__data">{nodePlayer.field_birth_date || `Onbekend`}</span>
      </div>
      <div className="player__details__meta__item player__details__meta__item--position">
        <span className="player__details__meta__item__data">{mapPositionCode(nodePlayer.field_position || ``)}</span>
        <span className="player__details__meta__item__label">
          {nodePlayer?.relationships?.node__team && (
            <Link to={nodePlayer?.relationships?.node__team[0]?.path?.alias || ``}>
              {nodePlayer?.relationships?.node__team[0]?.title}
            </Link>
          )}
        </span>
      </div>
      <div className="player__details__meta__item player__details__meta__item--joindate">
        <span className="player__details__meta__item__label">
          {currentlyPlaying && `Speler bij KCVV sinds`}
          {!currentlyPlaying && `Speler tussen`}
        </span>
        <span className="player__details__meta__item__data">
          {nodePlayer.field_join_date || `Onbekend`}
          {!currentlyPlaying && (
            <>
              <span className={`text--regular`}> en </span> {nodePlayer.field_date_leave}
            </>
          )}
        </span>
      </div>
    </div>
  )
}

const renderPlayerStatsFull = (playerStatistics: PlayerStatsDataResponseObject[]) => {
  return (
    <Card title="Statistieken" className={`player__stats__stats`} hasTable={true}>
      <table className={`player__stats__stats__table`}>
        <thead>
          <tr>
            <th className={`table__column__string`}>Team</th>
            <th className={`table__column__number show-for-medium`}>
              <span title="Wedstrijden gespeeld">P</span>
            </th>
            <th className={`table__column__number`}>
              <span title="Wedstrijden gewonnen">W</span>
            </th>
            <th className={`table__column__number`}>
              <span title="Wedstrijden gelijkgespeeld">D</span>
            </th>
            <th className={`table__column__number`}>
              <span title="Wedstrijden verloren">L</span>
            </th>
            <th className={`table__column__number`}>
              <img src={iconCardYellow} title="Gele kaart" alt="Gele kaart" className="table__header__icon" />
            </th>
            <th className={`table__column__number`}>
              <img src={iconCardRed} title="Rode kaart" alt="Rode kaart" className="table__header__icon" />
            </th>
            <th className={`table__column__number`}>
              <img
                src={iconGoal}
                title="Doelpunt(en) gescoord"
                alt="Doelpunt(en) gescoord"
                className="table__header__icon"
              />
            </th>
            <th className={`table__column__number  show-for-medium`}>
              <img src={iconCleansheet} title="Cleansheets" alt="Cleansheets" className="table__header__icon" />
            </th>
            <th className={`table__column__number`}>
              <span title="Minuten gespeeld">
                <Icon icon="fa-clock-o" />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {playerStatistics.map(function (stats) {
            return (
              <tr>
                <td className={`table__column__string`}>{stats?.team?.replace(`Voetbal : `, ``)}</td>
                <td className={`table__column__number show-for-medium`}>{stats.gamesPlayed}</td>
                <td className={`table__column__number`}>{stats.gamesWon}</td>
                <td className={`table__column__number`}>{stats.gamesEqual}</td>
                <td className={`table__column__number`}>{stats.gamesLost}</td>
                <td className={`table__column__number`}>{stats.yellowCards}</td>
                <td className={`table__column__number`}>{stats.redCards}</td>
                <td className={`table__column__number`}>{stats.goals}</td>
                <td className={`table__column__number show-for-medium`}>{stats.cleanSheets}</td>
                <td className={`table__column__number`}>{stats.minutes}'</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}

const renderPlayerGamesFull = (gameReports: PlayerStatsReportsResponseObject[]) => {
  return (
    <Card className={`player__stats__games`} title="Wedstrijden" hasTable={true}>
      <table className={`player__stats__games__table responsive-card-table`}>
        <thead>
          <tr>
            <th className={`table__column__string`}>Team</th>
            <th className={`table__column__string`}>Type</th>
            <th className={`table__column__string`}>Datum</th>
            <th className={`table__column__number`}>
              <span title="Thuis/uit">H/A</span>
            </th>
            <th className={`table__column__string table__column__score`}>Score</th>
            <th className={`table__column__string`}>Tegenstander</th>
            <th className={`table__column__number`}>
              <img src={iconCardYellow} title="Gele kaart" alt="Gele kaart" className="table__header__icon" />
            </th>
            <th className={`table__column__number`}>
              <img src={iconCardRed} title="Rode kaart" alt="Rode kaart" className="table__header__icon" />
            </th>
            <th className={`table__column__number`}>
              <img src={iconGoal} title="Doelpunten gescoord" alt="Rode kaart" className="table__header__icon" />
            </th>
            <th className={`table__column__number`}>
              <span title="Minuten gespeeld">
                <Icon icon="fa-clock-o" />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {gameReports.map(function (game) {
            return (
              <tr>
                <td data-label="Team" className={`table__column__string`}>
                  {game.team?.replace(`Voetbal : `, ``)}
                </td>
                <td data-label="Type" className={`table__column__string`}>
                  {game.competition}
                </td>
                <td data-label="Datum" className={`table__column__string`}>
                  {moment(game.date).format(`DD/MM/YYYY`)}
                </td>
                <td data-label="Thuis/uit" className={`table__column__number`}>
                  {game.home ? (
                    <span className={`player__stats__games__home`} title="Thuiswedstrijd">
                      <Icon icon="fa-home" alt="Thuiswedstrijd" />
                    </span>
                  ) : (
                    <span className={`player__stats__games__away`} title="Uitwedstrijd">
                      <Icon icon="fa-bus" alt="Uitwedstrijd" />
                    </span>
                  )}
                </td>
                <td data-label="Score" className={`table__column__string table__column__score`}>
                  {game.goalsHomeTeam}&nbsp;-&nbsp;{game.goalsAwayTeam}
                </td>
                <td data-label="Tegenstander" className={`table__column__string`}>
                  {game.opponent}
                </td>
                <td data-label="Gele kaart(en)" className={`table__column__number`}>
                  {game.yellowCards}
                </td>
                <td data-label="Rode kaart(en)" className={`table__column__number`}>
                  {game.redCards}
                </td>
                <td data-label="Doelpunten" className={`table__column__number`}>
                  {game.goals}
                </td>
                <td data-label="Speeltijd" className={`table__column__number`}>
                  {game.minutesPlayed}'
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}

export const query = graphql`
  query PlayerQuery($slug: String!) {
    nodePlayer(path: { alias: { eq: $slug } }) {
      path {
        alias
      }
      body {
        processed
      }
      title
      field_join_date
      field_date_leave
      field_lastname
      field_position
      field_firstname
      field_birth_date
      field_shirtnumber
      field_vv_id
      relationships {
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
            ...KCVVFluid480
          }
        }
        field_image_celebrate {
          localFile {
            ...KCVVFixedPlayerTeaserShare
          }
        }
      }
    }
  }
`
