import React, { Component } from "react"

import "./player.scss"
import { Link } from "gatsby"

// eslint-disable-next-line
String.prototype.replaceAll = function(search, replacement) {
  var target = this
  return target.replace(new RegExp(search, "g"), replacement)
}

/**
 */
class PlayerDetail extends Component {
  render() {
    const { player } = this.props
    const cleanBody =
      (player.body &&
        player.body.processed.replaceAll(
          "/sites/default/",
          `${process.env.GATSBY_API_DOMAIN}/sites/default/`
        )) ||
      ""

    return (
      <article className={"player-detail"}>
        <header className={"player-detail__header"}>
          <h1 className={"player-detail__name"}>
            <span className={"player-detail__name-first"}>
              {player.field_firstname}
            </span>
            <span className={"player-detail__name-last"}>
              {player.field_lastname}
            </span>
          </h1>

          <div className={"bg-green-mask"}>
            <div
              className={"player-detail__bg-avatar"}
              style={
                player.relationships.field_image && {
                  backgroundImage: `url(${player.relationships.field_image.localFile.childImageSharp.fixed.src})`,
                }
              }
            />
            <div className={"bg-white-end"} />
          </div>

          <div className={"player-detail__bg-shirt-number"} aria-hidden="true">
            {player.field_position_short || ""}
          </div>
        </header>

        <div className={"staff-break"}></div>

        <section className={"player-detail__data"}>
          <div
            className={
              "player-detail__data-item player-detail__data-item--birthdate"
            }
          >
            <span className={"player-detail__data-item__label"}>
              Geboortedatum
            </span>
            <span className={"player-detail__data-item__data"}>
              {player.field_birth_date || "Onbekend"}
            </span>
          </div>
          <div
            className={
              "player-detail__data-item player-detail__data-item--position"
            }
          >
            <span className={"player-detail__date-item__data"}>
              {player.field_position_staff || ""}
            </span>
            <span className={"player-detail__data-item__label"}>
              {player.relationships.node__team && (
                <Link to={player.relationships.node__team[0].path.alias}>
                  {player.relationships.node__team[0].title}
                </Link>
              )}
            </span>
          </div>
          <div
            className={
              "player-detail__data-item player-detail__data-item--joindate"
            }
          >
            <span className={"player-detail__data-item__label"}>
              Aangesloten bij KCVV sinds
            </span>
            <span className={"player-detail__data-item__data"}>
              {player.field_join_date || "Onbekend"}
            </span>
          </div>
        </section>
        <section className={"player-detail__body"}>
          <div dangerouslySetInnerHTML={{ __html: cleanBody }} />
        </section>
      </article>
    )
  }
}

export default PlayerDetail
