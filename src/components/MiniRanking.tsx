import { useStaticQuery, graphql } from "gatsby"
import { useState } from "react"
import { useSiteMetaData } from "../hooks/use-site-metadata"

import { MiniRankingProps } from "../Types/MiniRanking"
import { RankingData, RankingDataObject } from "../Types/Ranking"

export const MiniRanking = ({ teamId, homeTeam, awayTeam }: MiniRankingProps) => {
  const [data, setData] = useState<RankingDataObject[]>([])

  const { kcvvPsdApi } = useSiteMetaData()
}
