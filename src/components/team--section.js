import React, { Component } from "react"
import { PlayerTeaser } from "./player--teaser"

import "./team--section.scss"

export class TeamSection extends Component {
  render() {
    const { title, lineup } = this.props

    return (
      <section className={"team_lineup__section"}>
        <h2>{title}</h2>
        <ul>
          {lineup.map((player, i) => {
            return (
              <li className={"team_lineup__item"} key={i}>
                <PlayerTeaser
                  url={player.path.alias}
                  position={
                    player.field_shirtnumber || player.field_position_short
                  }
                  first_name={player.field_firstname}
                  last_name={player.field_lastname}
                  picture={player.relationships.field_image}
                />
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}
