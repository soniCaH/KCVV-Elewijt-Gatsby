import React, { Fragment, FunctionComponent } from "react"
import Helmet from "react-helmet"
import { getSrc, IGatsbyImageData } from "gatsby-plugin-image"

import { useQueryParam, StringParam } from "use-query-params"

import { PlayerShareProps } from "./PlayerShare.types"
import { Player } from "../types/Drupal"

import "./PlayerShare.scss"

const renderPlayerName = (firstName: string, lastName: string) => (
  <h1 className={`player-detail__name`}>
    <span className={`player-detail__name-first`}>{firstName}</span>
    <span className={`player-detail__name-last`}>{lastName}</span>
  </h1>
)

const renderPlayerImage = (imageData: IGatsbyImageData | undefined) => (
  <div className={`player-detail__bg-avatar`} style={imageData && { backgroundImage: `url(${getSrc(imageData)})` }} />
)

const renderPlayerNumber = (shirtNumber: number) => (
  <div className={`player-detail__bg-shirt-number`} aria-hidden="true">
    {shirtNumber}
  </div>
)

const renderPlayerHeader = (player: Player) => (
  <Fragment>
    {renderPlayerName(player.field_firstname, player.field_lastname)}
    {renderPlayerImage(player.relationships?.field_image?.localFile?.childImageSharp?.gatsbyImageData)}
    {player.field_shirtnumber && renderPlayerNumber(player.field_shirtnumber)}
  </Fragment>
)

const getFallback = (imageData?: IGatsbyImageData) =>
  imageData?.placeholder?.fallback ||
  `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='437'%20height='503'%20viewBox='0%200%20437%20503'%20preserveAspectRatio='none'%3e%3cpath%20d='M198%201c-14%204-32%2021-36%2033l-1%2028-1%2024-2%202c-3%203-4%205-2%2013%204%2016%209%2028%2012%2029%203%200%204%203%205%2011l2%2011v6h-3c-1-2-5-1-6%201-3%202-5%2011-6%2017%200%204-1%206-2%206-3%200-7%204-9%208s-5%206-9%206-7%201-14%207l-11%207-8%205-8%205c-17%208-30%2023-33%2035l-2%207c-3%203-1%2034%201%2038%203%204%203%209%202%2026l2%209%203%2011%203%2014c1%204%203%2013%203%2020%202%2012%202%2012%205%2016%204%204%204%204%204%209-1%204-1%205%203%209%208%2010%2010%2013%2011%2022l2%209%206%206c4%204%206%206%207%209l5%209c8%208%208%2010%207%2016l-4%2017%20116%201h116v-4l-3-61v-5l7-2%2019-4%2019-5c15-2%2016-3%2018-22%202-21%202-36%200-38l-2-9-4-20-3-15-5-10-6-11-5-7c-3-4-3-5-2-8%200-3%200-4-3-6l-3-5-3-9-4-14c-1-7-1-9-4-11-4-4-7-11-9-18-1-2-2-5-4-6l-6-4c-3-3-9-6-24-10l-13-4-12-3c-12-2-24-9-32-20-6-8-6-9-4-17%202-14%203-37%202-57%200-18%200-20%202-28l3-15c0-7%200-7-4-14-3-4-4-8-4-10%200-4-14-19-23-23-13-7-18-8-31-8l-15%201'%20fill='%232d2d2d'%20fill-rule='evenodd'/%3e%3c/svg%3e`

const PlayerShare: FunctionComponent<PlayerShareProps> = ({ player }) => {
  const [score] = useQueryParam(`score`, StringParam)
  const [match] = useQueryParam(`match`, StringParam)

  const fallback = getFallback(player.relationships?.field_image?.localFile?.childImageSharp?.gatsbyImageData)

  return (
    <Fragment>
      <article className={`player-detail player-detail--share`} id="share-image-source">
        <Helmet
          bodyAttributes={{
            class: `share`,
          }}
        />
        <img src={fallback} className="player-detail__bg--fallback" />

        {renderPlayerHeader(player)}

        <div className={`bg-green-mask player-detail--share__details`}>
          <span className="player-detail--share__match">{match}</span>
          <span className="player-detail--share__title">Goal!</span>
          <span className="player-detail--share__score">{score}</span>
        </div>
      </article>
    </Fragment>
  )
}

export default PlayerShare
