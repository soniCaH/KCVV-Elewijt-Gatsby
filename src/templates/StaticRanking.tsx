// import { RankingDataObject } from "../Types/Ranking"
import { StaticRanking } from "../components/Ranking"
import React from "react"
import { FullScreenLayout } from "../layouts"

const StaticRankingPage = ({ pageContext }: never) => {
  const { dynamicData } = pageContext
  return (
    <FullScreenLayout>
      <StaticRanking data={dynamicData} />
    </FullScreenLayout>
  )
}

export default StaticRankingPage
