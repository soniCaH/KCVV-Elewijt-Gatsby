import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React, { FunctionComponent } from "react" // importing FunctionComponent
import "./PlayerTeaser.scss"
import { PlayerTeaserProps } from "./PlayerTeaser.types"

const PlayerTeaser: FunctionComponent<PlayerTeaserProps> = ({ url, position, first_name, last_name, picture }) => {
  let image
  if (!picture) {
    image = (
      <StaticImage
        src={`../images/kcvv-player-bg.png`}
        alt={`"${first_name} ${last_name}"`}
        placeholder={`tracedSVG`}
      />
    )
  } else {
    image = <GatsbyImage image={picture} alt={`"${first_name} ${last_name}"`} />
  }

  return (
    <article className={`player_teaser`}>
      <Link to={url}>
        <div className={`player_teaser__image`}>
          {image}
          <div className={`player_teaser__gradient`}></div>
        </div>
        <div className={`player_teaser__info`}>
          <div className={`player_teaser__info__number`}>{position}</div>
          <div className={`player_teaser__info__firstname`}>{first_name}</div>
          <div className={`player_teaser__info__lastname`}>{last_name}</div>
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
