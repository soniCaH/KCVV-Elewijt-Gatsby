// importing FunctionComponent
import { PlayerTeaserProps } from "../Types/PlayerTeaser"
import "./PlayerTeaser.scss"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"

const PlayerTeaser = ({ url, position, first_name, last_name, picture }: PlayerTeaserProps) => {
  let image
  if (!picture) {
    image = (
      <StaticImage src={`../images/kcvv-player-bg.png`} alt={`"${first_name} ${last_name}"`} placeholder={`blurred`} />
    )
  } else {
    image = <GatsbyImage image={picture} alt={`"${first_name} ${last_name}"`} />
  }

  return (
    <article className={`player__teaser`}>
      <Link to={url} title={`${position} - ${first_name} ${last_name}`}>
        <div className={`player__teaser__bg`}>
          <StaticImage src={`../images/player-bg.jpg`} alt="" />
        </div>
        <div className={`player__teaser__image`}>{image}</div>
        <span className={`player__teaser__position`}>{position}</span>
        <div className={`player_teaser__name__wrapper`}>
          <div className={`player_teaser__name player_teaser__name--first`} title={`${first_name} ${last_name}`}>
            {first_name}
          </div>
          <div className={`player_teaser__name player_teaser__name--last`} title={`${first_name} ${last_name}`}>
            {last_name}
          </div>
        </div>
      </Link>
    </article>
  )
}

PlayerTeaser.defaultProps = {
  url: `#`,
  position: ``,
  first_name: ``,
  last_name: ``,
}

export default PlayerTeaser
