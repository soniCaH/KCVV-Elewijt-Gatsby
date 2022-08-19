import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSiteMetaData } from "../hooks/use-site-metadata"
import { PlayerProps, PlayerStatsDataObject } from "../Types/Player"

const PlayerDetail = ({ player }: PlayerProps) => {
  const [data, setData] = useState<PlayerStatsDataObject[]>([])
  const { kcvvPsdApi } = useSiteMetaData()
  const playerId = player.field_vv_id

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${kcvvPsdApi}/stats/player/${playerId}`)
      setData(response.data)
    }
    getData()
  }, [kcvvPsdApi, playerId])

  const team = player?.relationships?.node__team || []
  const articles = player?.relationships?.node__article || []

  return (
    <>
      <article className="player__details">{player?.title}</article>
    </>
  )
}

export default PlayerDetail
