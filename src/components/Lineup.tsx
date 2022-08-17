import React from "react"
import { LineupPlayer, LineupProps, LineupStaff } from "../Types/Lineup"
import PlayerTeaser from "./PlayerTeaser"
import "./Lineup.scss"
const isPlayer = (object: LineupPlayer | LineupStaff): object is LineupPlayer => `field_shirtnumber` in (object || {})

const Lineup = ({ title, lineup }: LineupProps) => {
  return (
    <section className="team__lineup__section">
      <h2 className="after-border">{title}</h2>
      <ul>
        {lineup?.map((player, i) => {
          return (
            <li className={`team__lineup__item`} key={i}>
              <PlayerTeaser
                url={player?.path?.alias || ``}
                position={
                  (isPlayer(player) ? player?.field_shirtnumber?.toString() : player?.field_position_short) || ``
                }
                first_name={player?.field_firstname || ``}
                last_name={player?.field_lastname || ``}
                picture={player?.relationships?.field_image?.localFile?.childImageSharp?.gatsbyImageData}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default Lineup
