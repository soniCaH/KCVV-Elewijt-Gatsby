import { MiniRankingProps } from "../Types/MiniRanking"
import { RankingDataObject, RankingDataTeamObject } from "../Types/Ranking"
import { useSiteMetaData } from "../hooks/use-site-metadata"
import { useEffect, useState } from "react"
import axios from "axios"
import React from "react"
import { Spinner } from "./Spinner"
import { sortRankings } from "../scripts/helper"

export const MiniRanking = ({ teamId, homeTeam, awayTeam }: MiniRankingProps) => {
  const [data, setData] = useState<RankingDataObject[]>([])

  const { kcvvPsdApi } = useSiteMetaData()

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${kcvvPsdApi}/ranking/${teamId}`)
      setData(response.data)
    }
    getData()
  }, [kcvvPsdApi, teamId])
  return (
    <section className={`ranking__wrapper`}>
      {data.length > 0 || <Spinner />}
      {data && renderRankings(data, homeTeam, awayTeam)}
    </section>
  )
}

const renderRankings = (rankings: RankingDataObject[], homeTeam: string, awayTeam: string) => (
  <>
    {rankings
      .filter((ranking: RankingDataObject) => ranking.teams.length > 0)
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((ranking: RankingDataObject, i: number) => i === 0 && renderRanking(ranking, homeTeam, awayTeam, i))}
  </>
)

const renderRanking = (ranking: RankingDataObject, homeTeam: string, awayTeam: string, i: number) => (
  <div className={`ranking`} key={i}>
    <h4>{ranking.name.replace(`Voetbal : `, ``)}</h4>
    <table>
      <thead>
        <tr>
          <th className={`table__column__number`}>#</th>
          <th className={`table__column__string`}>Team</th>
          <th className={`table__column__number show-for-medium`}>P</th>
          <th className={`table__column__number`}>W</th>
          <th className={`table__column__number`}>D</th>
          <th className={`table__column__number`}>L</th>
          <th className={`table__column__number show-for-medium`}>G+</th>
          <th className={`table__column__number show-for-medium`}>G-</th>
          <th className={`table__column__number`}>+/-</th>
          <th className={`table__column__number`}>Pts</th>
        </tr>
      </thead>
      <tbody>
        {ranking.teams.sort(sortRankings).map(
          (team: RankingDataTeamObject, j: number) =>
            (team.team?.club?.localName.includes(homeTeam) || team.team?.club?.localName.includes(awayTeam)) && (
              <tr key={j}>
                <td className={`table__column__number`}>{team.rank || `-`}</td>
                <td
                  className={`table__column__string ${
                    team.team?.club?.localName?.toLowerCase().includes(`elewijt`) ? `table__column--highlight` : ``
                  }`}
                >
                  {team.team?.club?.localName || ``}
                </td>
                <td className={`table__column__number show-for-medium`}>{team.matchesPlayed || `0`}</td>
                <td className={`table__column__number`}>{team.wins || `0`}</td>
                <td className={`table__column__number`}>{team.draws || `0`}</td>
                <td className={`table__column__number`}>{team.losses || `0`}</td>
                <td className={`table__column__number show-for-medium`}>{team.goalsScored || `0`}</td>
                <td className={`table__column__number show-for-medium`}>{team.goalsConceded || `0`}</td>
                <td className={`table__column__number`}>{team.goalsScored - team.goalsConceded || `0`}</td>
                <td className={`table__column__number`}>{team.points || `0`}</td>
              </tr>
            )
        )}
      </tbody>
    </table>
  </div>
)

export default MiniRanking
