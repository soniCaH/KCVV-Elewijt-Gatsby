import axios from "axios"
import { graphql, useStaticQuery } from "gatsby"
import React, { FunctionComponent, useEffect, useState } from "react"

import Icon from "../components/Icon"
import iconCardRed from "../images/i_card_red.png"
import iconCardYellow from "../images/i_card_yellow.png"
import iconCleansheet from "../images/i_cleansheet.png"
import iconGoal from "../images/i_goal.png"
import { translateGameResult } from "../scripts/helper"
import Card from "./Card"
import Spinner from "./Spinner"
import "./TeamStats.scss"

const TeamStats: FunctionComponent<TeamStatsProps> = ({ teamId = 1 }: TeamStatsProps) => {
  const [data, setData] = useState<TeamStatsDataObject>()

  const {
    site: {
      siteMetadata: { kcvvPsdApi },
    },
  }: TeamStatsData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          kcvvPsdApi
        }
      }
    }
  `)

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${kcvvPsdApi}/stats/team/${teamId}`)
      setData(response.data)
    }
    getData()
  }, [kcvvPsdApi, teamId])

  return (
    <section className={`team__stats__wrapper`}>
      {data !== null || <Spinner />}
      {data && renderTeamStats(data)}
      {data && renderTeamSquadStats(data)}
    </section>
  )
}

const renderTeamStats = ({ extraStats }: TeamStatsDataObject): JSX.Element => (
  <Card className={`team_stats__team`} title="Statistieken">
    <span className={`team_stats__label`}>Gespeeld</span>
    <span>{extraStats.gamesPlayed}</span>
    <span className={`team_stats__label`}>Gewonnen</span>
    <span>{extraStats.gamesWon}</span>
    <span className={`team_stats__label`}>Gelijk</span>
    <span>{extraStats.gamesEqual}</span>
    <span className={`team_stats__label`}>Verloren</span>
    <span>{extraStats.gamesLost}</span>
    <span className={`team_stats__label`}>Doelpunten</span>
    <span>
      {extraStats.goalsScored} voor / {extraStats.goalsAgainst} tegen
    </span>
    <span className={`team_stats__label`}>Cleansheets</span>
    <span>{extraStats.cleanSheets}</span>
    <span className={`team_stats__label`}>Gele kaarten</span>
    <span>{extraStats.yellowCards}</span>
    <span className={`team_stats__label`}>Rode kaarten</span>
    <span>{extraStats.redCards}</span>
    <span className={`team_stats__label`}>Wedstrijden niet gescoord</span>
    <span>{extraStats.notScored}</span>
    <span className={`team_stats__label`}>Grootste overwinning</span>
    <span>
      {extraStats.biggestWin.result} tegen {extraStats.biggestWin.opponent}
    </span>
    <span className={`team_stats__label`}>Grootste verlies</span>
    <span>
      {extraStats.biggestLoss.result} tegen {extraStats.biggestLoss.opponent}
    </span>
    <span className={`team_stats__label`}>Meeste doelpunten</span>
    <span>
      {extraStats.mostGoals.result} tegen {extraStats.mostGoals.opponent}
    </span>
    <span className={`team_stats__label`}>Topschutters</span>
    <ul className={`team_stats__list`}>
      {extraStats.topscorers
        .sort((a, b) => b.value - a.value)
        .map((player, i) => (
          <li key={i}>
            {player.firstName} {player.lastName} ({player.value})
          </li>
        ))}
    </ul>
    <span className={`team_stats__label`}>Laatste wedstrijden</span>
    <span>
      {extraStats.gameStreak.map((game, i) => (
        <span
          key={i}
          className={`team_stats__streak team_stats__streak--${game.result.toLowerCase()}`}
          title={`${translateGameResult(game.result)}`}
        >
          {game.result.charAt(0) !== `E` ? game.result.charAt(0) : `D`}
        </span>
      ))}
    </span>
  </Card>
)

const renderTeamSquadStats = ({ squadPlayerStatistics }: TeamStatsDataObject) => {
  squadPlayerStatistics.sort((a, b) => b.minutes - a.minutes)

  return (
    <Card className="team_stats__players" title="Spelers" hasTable={true}>
      <table>
        <thead>
          <tr>
            <th className={`table__column__string`}>Speler</th>
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
            <th className={`table__column__number show-for-medium`}>
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
          {squadPlayerStatistics
            .sort((a, b) => b.minutes - a.minutes)
            .map(function (player) {
              return (
                <tr>
                  <td className={`table__column__string`}>
                    {player.firstName} {player.lastName}
                  </td>
                  <td className={`table__column__number show-for-medium`}>{player.gamesPlayed}</td>
                  <td className={`table__column__number`}>{player.gamesWon}</td>
                  <td className={`table__column__number`}>{player.gamesEqual}</td>
                  <td className={`table__column__number`}>{player.gamesLost}</td>
                  <td className={`table__column__number`}>{player.yellowCards}</td>
                  <td className={`table__column__number`}>{player.redCards}</td>
                  <td className={`table__column__number`}>{player.goals}</td>
                  <td className={`table__column__number show-for-medium`}>{player.cleanSheets}</td>
                  <td className={`table__column__number`}>{player.minutes || `0`}'</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </Card>
  )
}

export default TeamStats
