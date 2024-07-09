import { IGatsbyImageData, getSrc } from "gatsby-plugin-image"
import React, { Fragment } from "react"
import { PlayerShareProps } from "../Types/Player"
import { getQueryParams } from 'react-use-query-param-string';


import "./PlayerShare.scss"

const renderPlayerHeader = (player: Queries.node__player) => (
  <Fragment>
    <div className="player__header__inner_text">
      <h1 className="player__detail__name">
        <span className="player__detail__name_first">{player.field_firstname || ``}</span>
        <span className="player__detail__name_last">{player.field_lastname || ``}</span>
      </h1>
      {player.field_shirtnumber && (
        <p className="player__detail__shirt_number" aria-hidden="true">
          {player.field_shirtnumber}
        </p>
      )}
    </div>
  </Fragment>
)

const getFallback = (imageData?: IGatsbyImageData) =>
  imageData?.placeholder?.fallback ||
  `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='563'%20height='1000'%20viewBox='0%200%20563%201000'%20preserveAspectRatio='none'%3e%3cpath%20d='M225%20353c-20%208-42%2029-47%2045l-1%2024v44l-3%201c-4%202-5%207-4%2011l2%209c5%2019%2011%2033%2016%2035%204%202%204%204%205%2014l2%2014c3%2010%202%2014-4%2010l-4-2c-2%200-6%206-7%209l-2%205-1%2010v7l-5%202c-5%203-6%204-12%2014-2%203-7%205-13%205-4%200-14%206-21%2013l-8%205-10%206-12%207c-13%207-28%2019-33%2027-7%209-9%2014-10%2019l-2%207c-2%203-2%205-2%2025%200%2021%200%2022%203%2027%203%206%205%2018%203%2028-2%207-1%2013%201%2017%202%203%205%2014%205%2018l1%208c6%2018%208%2030%208%2041%200%207%200%208%207%2015l4%207c-3%208-2%2011%204%2016l6%208%205%207%205%2021c1%206%200%205%2013%2016l4%208%206%2010c11%2012%2013%2017%2010%2024l-2%207v3h300l-1-21a674%20674%200%2000-2-59l11-2%2016-3c14-5%2023-7%2033-9%2015-2%2020-6%2021-16a2207%202207%200%20014-44c0-14%200-15%201-13%201%201%201%201%201-1l-3-5c-2-2-3-3-3-13l-3-17-6-26-8-14-8-14c-1-5-2-8-6-11-3-3-3-4-3-9%200-6%200-6-3-9-3-2-4-4-4-5l-7-21-2-9c0-8-2-12-5-15-4-4-10-15-12-23-1-4-2-6-5-8l-8-7c-3-3-6-4-10-6l-9-2a284%20284%200%2000-27-9c-12-4-15-5-20-5l-9-2-9-3c-9-4-30-27-30-35l1-11c2-11%205-51%204-59a195%20195%200%20016-72c0-7%200-7-3-12-5-8-7-11-7-17-1-7-2-8-8-12l-5-4-5-5c-5-6-15-12-28-16l-9-4h-17l-20%201'%20fill='%232d2d2d'%20fill-rule='evenodd'/%3e%3c/svg%3e`

const PlayerShare = ({ player }: PlayerShareProps) => {
  const params = getQueryParams();
  console.log(params);

  const fallback = getFallback(player.relationships?.field_image_celebrate?.localFile?.childImageSharp?.gatsbyImageData)

  return (
    <Fragment>
      <article className={`player__share player-detail--share`} id="share-image-source">
        <div className="player__share__goals__wrapper">
          <span className="player-detail--share__score__random">GOAL</span>
          <span className="player-detail--share__score__random">GOAL</span>
          <span className="player-detail--share__score__random">GOAL</span>
          <span className="player-detail--share__score__random">GOAL</span>
          <span className="player-detail--share__score__random">GOAL</span>
          <span className="player-detail--share__score__random">GOAL</span>
          <span className="player-detail--share__score__random">GOAL</span>
          <span className="player-detail--share__score__random">GOAL</span>
          <span className="player-detail--share__score__random">GOAL</span>
          <span className="player-detail--share__score__random">GOAL</span>
        </div>
        {renderPlayerHeader(player)}

        <img src={fallback} className="player-detail__bg--fallback" />

        <div
          className={`player-detail__bg-avatar`}
          style={
            player.relationships?.field_image_celebrate?.localFile?.childImageSharp?.gatsbyImageData && {
              backgroundImage: `url(${getSrc(
                player.relationships?.field_image_celebrate?.localFile?.childImageSharp?.gatsbyImageData
              )})`,
            }
          }
        />

        <span className="player-detail--share__title">Goal!</span>
        <div className={`player-detail--share__details`}>
          <span className="player-detail--share__match">{params.match}</span>
          <span className="player-detail--share__score">{params.score}</span>
        </div>
      </article>
    </Fragment>
  )
}

export default PlayerShare
