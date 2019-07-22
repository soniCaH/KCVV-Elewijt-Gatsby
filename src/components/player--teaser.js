import React, { Component } from 'react'
import Img from 'gatsby-image'
import playerProfile from '../images/kcvv-player-bg.png'

import './player--teaser.scss';

class PlayerTeaser extends Component {
  render() {
    const { url, position, firstname, lastname, picture = null } = this.props
    let image =  null;
    if (picture) {
        image = <Img fluid={picture.localFile.childImageSharp.fixed} />
    }
    else {
        image = <img src={playerProfile} alt={`"${firstname} ${lastname}"`} />
    }

    return (
      <article className={'player_teaser'}>
        <a href={url}>
          <div className={'player_teaser__image'}>
            {image}
            <div className={'player_teaser__gradient'}></div>
          </div>
          <div className={'player_teaser__info'}>
            <div className={'player_teaser__info__number'}>
              {position}
            </div>
            <div className={'player_teaser__info__firstname'}>
              {firstname}
            </div>
            <div className={'player_teaser__info__lastname'}>
              {lastname}
            </div>
          </div>
        </a>
      </article>
    )
  }
}

export default PlayerTeaser
