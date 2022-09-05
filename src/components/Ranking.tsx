import { RankingProps, RankingDataObject, RankingDataTeamObject } from "../Types/Ranking"
import { useSiteMetaData } from "../hooks/use-site-metadata"
import { request, sortRankings } from "../scripts/helper"
import { Spinner } from "./Spinner"
import { useEffect, useState } from "react"
import React from "react"
import "./Ranking.scss"

export const Ranking = ({ teamId }: RankingProps) => {
  const [data, setData] = useState<RankingDataObject[]>([])
  const { kcvvPsdApi } = useSiteMetaData()

  useEffect(() => {
    async function getData() {
      const response = await request.get(`${kcvvPsdApi}/ranking/${teamId}`)
      setData(response.data)
    }
    getData()
  }, [kcvvPsdApi, teamId])

  return (
    <section className={`ranking__wrapper`}>
      {data.length > 0 || <Spinner />}
      {data && renderRankings(data)}
    </section>
  )
}

const renderRanking = (ranking: RankingDataObject, i: number) => {
  return (
    <div className={`ranking`} key={i}>
      <h4>{ranking.name.replace(`Voetbal : `, ``)}</h4>
      <table className="ranking__table">
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
          {ranking.teams.sort(sortRankings).map((team: RankingDataTeamObject, j: number) => (
            <tr
              key={j}
              className={team.team?.club?.localName?.toLowerCase().includes(`elewijt`) ? `table__row--highlight` : ``}
            >
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
          ))}
        </tbody>
      </table>
    </div>
  )
}

const renderRankings = (rankings: RankingDataObject[]) => {
  return (
    <>
      {rankings
        .filter((ranking: RankingDataObject) => ranking.teams.length > 0)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((ranking: RankingDataObject, i: number) => {
          return renderRanking(ranking, i)
        })}
    </>
  )
}
