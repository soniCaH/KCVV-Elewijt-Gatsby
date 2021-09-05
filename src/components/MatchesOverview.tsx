import React, { FunctionComponent, useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import "./MatchesOverview.scss"
import Spinner from "./Spinner"
import { setup } from "axios-cache-adapter"
import Moment from "moment-timezone"
import "moment/locale/nl-be"

import { mapPsdStatus } from "../scripts/helper"
import { MatchTeaserDetail } from "./MatchTeaser"

const api = setup({
  baseURL: `https://footbalisto.be`,
  cache: {
    maxAge: 15 * 60 * 1000,
    exclude: { query: false },
  },
})

const MatchesOverview: FunctionComponent<MatchesOverviewProps> = ({
  include = [],
  exclude = [],
  action = `next`,
  details = false,
}: MatchesOverviewProps) => {
  if (action !== `prev` && action !== `next`) {
    throw new Error(`Invalid action provided`)
  }

  if (include.length > 0 && exclude.length > 0) {
    throw new Error(`Can't include and exclude teams at same moment`)
  }

  const [data, setData] = useState<Match[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const {
    site: {
      siteMetadata: { kcvvPsdApi },
    },
  }: MatchesOverviewQueryData = useStaticQuery(graphql`
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
      let params = {}

      if (include.length > 0) {
        params = { include: include.join() }
      }
      if (exclude.length > 0) {
        params = { exclude: exclude.join() }
      }

      const response = await api.get(`/matches/${action}`, {
        params: params,
      })
      const anotherResponse = await api.get(`/matches/${action}`, {
        params: params,
      })

      console.log(response, anotherResponse)

      setData(response.data)
      setLoading(false)
    }
    getData()
  }, [])

  Moment.locale(`nl-be`)

  return (
    <div className="matches_overview__wrapper">
      {data.length > 0 || loading === false || <Spinner />}
      {data.length <= 0 && loading === false && <div>Er staan voorlopig geen wedstrijden gepland</div>}
      {data.length > 0 && (
        <div>
          {data
            .sort((a, b) => a.timestamp - b.timestamp)
            .map((match: Match, i) => {
              if (details) {
                return <MatchTeaserDetail match={match} key={i} />
              } else {
                const matchTime = Moment.tz(match.date, `Europe/Brussels`)
                return (
                  <div className="matches_overview__item" key={i}>
                    <span className={`label`}>{match.teamName.replace(`Voetbal : `, ``)}</span>
                    <span className={`matches_overview__date`}>{matchTime.format(`ddd D MMMM - H:mm`)}</span>
                    {+match.status !== 0 && (
                      <span className={`label alert matches_overview__status`}>{mapPsdStatus(match.status)}</span>
                    )}
                    <h6>
                      {match.homeClub?.name} - {match.awayClub?.name}
                    </h6>
                  </div>
                )
              }
            })}
        </div>
      )}
    </div>
  )
}

export default MatchesOverview
