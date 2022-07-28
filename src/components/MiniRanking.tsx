import { useStaticQuery, graphql } from "gatsby"
import { useState } from "react"

import { MiniRankingProps } from "../Types/MiniRanking"
import { RankingData, RankingDataObject } from "../Types/Ranking"

export const MiniRanking = ({ teamId, homeTeam, awayTeam }: MiniRankingProps) => {
  const [data, setData] = useState<RankingDataObject[]>([])

  const {
    site: {
      siteMetadata: { kcvvPsdApi },
    },
  }: RankingData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          kcvvPsdApi
        }
      }
    }
  `)
}
