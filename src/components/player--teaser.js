import React, { Component } from "react"
import { GatsbyImage } from "gatsby-plugin-image";

// Fallback image if no image uploaded.
import playerProfile from "../images/kcvv-player-bg.png"

// All CSS in the player_teaser context.
import "./player--teaser.scss"

export class PlayerTeaser extends Component {
  constructor(props) {
    super(props)

    this.linkUrl = props.url || "#"
    this.position = props.position || ""
    this.first_name = props.first_name || ""
    this.last_name = props.last_name || ""

    const picture = props.picture
    if (picture) {
      this.image = (
        <GatsbyImage
          image={picture.localFile.childImageSharp.gatsbyImageData}
          alt={`"${this.first_name} ${this.last_name}"`} />
      )
    } else {
      this.image = (
        <img
          src={playerProfile}
          alt={`"${this.first_name} ${this.last_name}"`}
        />
      )
    }
  }

  render() {
    return (
      <article className={"player_teaser"}>
        <a href={this.linkUrl}>
          <div className={"player_teaser__image"}>
            {this.image}
            <div className={"player_teaser__gradient"}></div>
          </div>
          <div className={"player_teaser__info"}>
            <div className={"player_teaser__info__number"}>{this.position}</div>
            <div className={"player_teaser__info__firstname"}>
              {this.first_name}
            </div>
            <div className={"player_teaser__info__lastname"}>
              {this.last_name}
            </div>
          </div>
        </a>
      </article>
    )
  }
}
