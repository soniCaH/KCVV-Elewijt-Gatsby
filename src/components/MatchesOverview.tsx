import { Match } from "../Types/Match"
import { MatchesOverviewProps } from "../Types/MatchesOverview"
import { useSiteMetaData } from "../hooks/use-site-metadata"
import { mapPsdStatus, request } from "../scripts/helper"
import { MatchTeaserDetail } from "./MatchTeaser"
import "./MatchesOverview.scss"
import { Spinner } from "./Spinner"
import { DateTime, Settings } from "luxon"
import React from "react"
import { useEffect, useState } from "react"

export const MatchesOverview = ({
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

  const { kcvvPsdApi } = useSiteMetaData()

  useEffect(() => {
    async function getData() {
      let params = {}

      if (include.length > 0) {
        params = { include: include.join() }
      }
      if (exclude.length > 0) {
        params = { exclude: exclude.join() }
      }

      const response = await request.get(`${kcvvPsdApi}/matches/${action}`, {
        params: params,
      })
      setData(response.data)
      setLoading(false)
    }
    getData()
  }, [action, exclude, include, kcvvPsdApi])

  Settings.defaultZone = `Europe/Brussels`
  Settings.defaultLocale = `nl-be`

  return (
    <div className="matches_overview__wrapper">
      {data.length > 0 || !loading ? null : <Spinner />}
      {!data.length && !loading && <div>Er staan voorlopig geen wedstrijden gepland</div>}
      {data.length > 0 && (
        <div>
          {data
            .sort((a, b) => a.timestamp - b.timestamp)
            .map((match: Match, i) => {
              if (details) {
                return <MatchTeaserDetail match={match} key={i} />
              } else {
                const matchTime = DateTime.fromFormat(match.date, `yyyy-MM-dd HH:mm`)
                return (
                  <div className="matches_overview__item" key={i}>
                    <span className={`label`}>{match.teamName.replace(`Voetbal : `, ``)}</span>
                    <span className={`matches_overview__date`}>{matchTime.toFormat(`ccc d MMMM - HH:mm`)}</span>
                    {+match.status !== 0 && (
                      <span className={`label alert matches_overview__status`}>{mapPsdStatus(match.status)}</span>
                    )}
                    <h6>
                      {match.homeClub?.abbreviation || match.homeClub?.name} -{` `}
                      {match.awayClub?.abbreviation || match.awayClub?.name}
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

MatchesOverview.defaultProps = {
  include: [],
  exclude: [],
  action: `next`,
  details: false,
}
