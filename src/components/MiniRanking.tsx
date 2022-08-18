import { MiniRankingProps } from "../Types/MiniRanking"
import { RankingDataObject } from "../Types/Ranking"
import { useSiteMetaData } from "../hooks/use-site-metadata"
import { useState } from "react"

export const MiniRanking = ({ teamId, homeTeam, awayTeam }: MiniRankingProps) => {
  const [data, setData] = useState<RankingDataObject[]>([])

  const { kcvvPsdApi } = useSiteMetaData()
}
