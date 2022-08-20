import { useSiteMetaData } from "../hooks/use-site-metadata"
import iconCardRed from "../images/i_card_red.png"
import iconCardYellow from "../images/i_card_yellow.png"
import iconCleansheet from "../images/i_cleansheet.png"
import iconGoal from "../images/i_goal.png"
import { translateGameResult } from "../scripts/helper"
import { Card } from "./Card"
import Icon from "./Icon"
import { Spinner } from "./Spinner"
import "./TeamStats.scss"
import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"

const TeamStats = ({ teamId = 1 }: TeamStatsProps) => {
  const [data, setData] = useState<TeamStatsDataObject>()
  const { kcvvPsdApi } = useSiteMetaData()

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${kcvvPsdApi}/stats/team/${teamId}`)
      setData(response.data)
    }
    getData()
  }, [kcvvPsdApi, teamId])

  return (
    <section className="team__stats__wrapper">
      {data !== null || <Spinner />}
      {data && renderTeamStats(data)}
      {data && renderTeamSquadStats(data)}
    </section>
  )
}

const renderTeamStats = ({ extraStats }: TeamStatsDataObject) => (
  <Card className="team__stats__team" title="Statistieken">
    <section className="team__stats__stats">
      <span className="team__stats__label">Gespeeld</span>
      <span>{extraStats.gamesPlayed}</span>
      <span className="team__stats__label">Gewonnen</span>
      <span>{extraStats.gamesWon}</span>
      <span className="team__stats__label">Gelijk</span>
      <span>{extraStats.gamesEqual}</span>
      <span className="team__stats__label">Verloren</span>
      <span>{extraStats.gamesLost}</span>
      <span className="team__stats__label">Cleansheets</span>
      <span>{extraStats.cleanSheets}</span>
      <span className="team__stats__label">Gele kaarten</span>
      <span>{extraStats.yellowCards}</span>
      <span className="team__stats__label">Rode kaarten</span>
      <span>{extraStats.redCards}</span>
      <span className="team__stats__label">Wedstrijden niet gescoord</span>
      <span>{extraStats.notScored}</span>
      <span className="team__stats__label">Grootste overwinning</span>
      <span>
        {extraStats.biggestWin.result} tegen {extraStats.biggestWin.opponent}
      </span>
      <span className="team__stats__label">Grootste verlies</span>
      <span>
        {extraStats.biggestLoss.result} tegen {extraStats.biggestLoss.opponent}
      </span>
      <span className="team__stats__label">Meeste doelpunten</span>
      <span>
        {extraStats.mostGoals.result} tegen {extraStats.mostGoals.opponent}
      </span>
      <span className="team__stats__label">Topschutters</span>
      <ul className="team__stats__list">
        {extraStats.topscorers
          .sort((a, b) => b.value - a.value)
          .map((player, i) => (
            <li key={i}>
              {player.firstName} {player.lastName} ({player.value})
            </li>
          ))}
      </ul>
      <span className="team__stats__label">Laatste wedstrijden</span>
      <span>
        {extraStats.gameStreak.map((game, i) => (
          <span
            key={i}
            className={`team__stats__streak team__stats__streak--${game.result.toLowerCase()}`}
            title={`${translateGameResult(game.result)}`}
          >
            {game.result.charAt(0) !== `E` ? game.result.charAt(0) : `D`}
          </span>
        ))}
      </span>
    </section>
    <table className="team__stats__bars">
      <tbody>
        <tr>
          <th className="team__stats__bars__title" colSpan={3} scope="row">
            Doelpunten
          </th>
        </tr>
        <tr className="team__stats__goals">
          <td className="team__stats__bars__label">{extraStats.goalsScored || `0`}</td>
          <td className="team__stats__bars__bars">
            <div className="team__stats__bars__bars__wrapper">
              <span
                className="team__stats__bars__bars__percent team__stats__bars__bars__percent--home"
                style={{
                  width: `calc(100% * ${extraStats.goalsScored / (extraStats.goalsScored + extraStats.goalsAgainst)})`,
                }}
              >
                {extraStats.goalsScored}
              </span>
              <span
                className="team__stats__bars__bars__percent team__stats__bars__bars__percent--away"
                style={{
                  width: `calc(100% * ${extraStats.goalsAgainst / (extraStats.goalsScored + extraStats.goalsAgainst)})`,
                }}
              >
                {extraStats.goalsAgainst}
              </span>
            </div>
          </td>
          <td className="team__stats__bars__label">{extraStats.goalsAgainst || `0`}</td>
        </tr>
        <tr>
          <th className="team__stats__bars__title" colSpan={3} scope="row">
            Wedstrijden
          </th>
        </tr>
        <tr className="team__stats__goals">
          <td className="team__stats__bars__label">{extraStats.gamesWon}</td>
          <td className="team__stats__bars__bars">
            <div className="team__stats__bars__bars__wrapper">
              <span
                className="team__stats__bars__bars__percent team__stats__bars__bars__percent--home"
                style={{
                  width: `calc(100% * ${extraStats.gamesWon / extraStats.gamesPlayed})`,
                }}
              >
                {extraStats.gamesWon}
              </span>
              <span
                className="team__stats__bars__bars__percent team__stats__bars__bars__percent--away"
                style={{
                  width: `calc(100% * ${extraStats.gamesLost / extraStats.gamesPlayed})`,
                }}
              >
                {extraStats.gamesLost}
              </span>
            </div>
          </td>
          <td className="team__stats__bars__label">{extraStats.gamesLost}</td>
        </tr>
        <tr>
          <th className="team__stats__bars__title" colSpan={3} scope="row">
            Cleansheets vs niet gescoord
          </th>
        </tr>
        <tr className="team__stats__goals">
          <td className="team__stats__bars__label">{extraStats.cleanSheets}</td>
          <td className="team__stats__bars__bars">
            <div className="team__stats__bars__bars__wrapper">
              <span
                className="team__stats__bars__bars__percent team__stats__bars__bars__percent--home"
                style={{
                  width: `calc(100% * ${extraStats.cleanSheets / (extraStats.cleanSheets + extraStats.notScored)})`,
                }}
              >
                {extraStats.cleanSheets}
              </span>
              <span
                className="team__stats__bars__bars__percent team__stats__bars__bars__percent--away"
                style={{
                  width: `calc(100% * ${extraStats.notScored / (extraStats.cleanSheets + extraStats.notScored)})`,
                }}
              >
                {extraStats.notScored}
              </span>
            </div>
          </td>
          <td className="team__stats__bars__label">{extraStats.notScored}</td>
        </tr>
      </tbody>
    </table>
  </Card>
)

const renderTeamSquadStats = ({ squadPlayerStatistics }: TeamStatsDataObject) => {
  squadPlayerStatistics.sort((a, b) => b.minutes - a.minutes)

  return (
    <Card className="team__stats__players" title="Spelers" hasTable={true}>
      <table className="team__stats__players_overview">
        <thead>
          <tr>
            <th className="table__column__string">Speler</th>
            <th className="table__column__number show-for-medium">
              <span title="Wedstrijden gespeeld">P</span>
            </th>
            <th className="table__column__number">
              <span title="Wedstrijden gewonnen">W</span>
            </th>
            <th className="table__column__number">
              <span title="Wedstrijden gelijkgespeeld">D</span>
            </th>
            <th className="table__column__number">
              <span title="Wedstrijden verloren">L</span>
            </th>
            <th className="table__column__number">
              <img src={iconCardYellow} title="Gele kaart" alt="Gele kaart" className="table__header__icon" />
            </th>
            <th className="table__column__number">
              <img src={iconCardRed} title="Rode kaart" alt="Rode kaart" className="table__header__icon" />
            </th>
            <th className="table__column__number">
              <img
                src={iconGoal}
                title="Doelpunt(en) gescoord"
                alt="Doelpunt(en) gescoord"
                className="table__header__icon"
              />
            </th>
            <th className="table__column__number show-for-medium">
              <img src={iconCleansheet} title="Cleansheets" alt="Cleansheets" className="table__header__icon" />
            </th>
            <th className="table__column__number">
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
                  <td className="table__column__string">
                    {player.firstName} {player.lastName}
                  </td>
                  <td className="table__column__number show-for-medium">{player.gamesPlayed}</td>
                  <td className="table__column__number">{player.gamesWon}</td>
                  <td className="table__column__number">{player.gamesEqual}</td>
                  <td className="table__column__number">{player.gamesLost}</td>
                  <td className="table__column__number">{player.yellowCards}</td>
                  <td className="table__column__number">{player.redCards}</td>
                  <td className="table__column__number">{player.goals}</td>
                  <td className="table__column__number show-for-medium">{player.cleanSheets}</td>
                  <td className="table__column__number">{player.minutes || `0`}'</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </Card>
  )
}

export default TeamStats
