import React, { Component } from "react"
import { Link } from "gatsby"
import { PropTypes } from "prop-types"

import { PlayerMinimal } from "./objects/player"

import "./player--featured.scss"

class PlayerFeatured extends Component {
  renderPlayerHeader = () => (
    <header className={"player--featured__header"}>
      <div className={"bg-green-mask--horizontal"}>
        <div
          className={"player--featured__bg-avatar"}
          style={{ backgroundImage: `url(${this.props.player.imageSrc})` }}
        />
        <div className={"bg-white-end"} />
      </div>
    </header>
  )
  renderPlayerStats = () => (
    <aside className={"player--featured__statistics"}>
      <section className={"player--featured__statistics-item"}>
        <div className={"player--featured__statistics-item__number"}>
          {this.props.player.gamesPlayed || "0"}
        </div>
        <div className={"player--featured__statistics-item__label"}>
          Wedstrijden
        </div>
      </section>

      {this.props.player.position === "k" && (
        <section className={"player--featured__statistics-item"}>
          <div className={"player--featured__statistics-item__number"}>
            {this.props.player.cleanSheets || "0"}
          </div>
          <div className={"player--featured__statistics-item__label"}>
            Cleansheets
          </div>
        </section>
      )}
      {this.props.player.position !== "k" && (
        <section className={"player--featured__statistics-item"}>
          <div className={"player--featured__statistics-item__number"}>
            {this.props.player.goalsScored || "0"}
          </div>
          <div className={"player--featured__statistics-item__label"}>
            Doelpunten
          </div>
        </section>
      )}
      <section
        className={
          "player--featured__statistics-item player--featured__statistics-item--cards"
        }
      >
        <div className={"player--featured__statistics-item__number"}>
          {this.props.player.cardsYellow || "0"}
        </div>
        <div className={"player--featured__statistics-item__label"}>
          <span className={"stats__card stats__card--yellow"}></span>
        </div>
      </section>
      <section
        className={
          "player--featured__statistics-item player--featured__statistics-item--cards"
        }
      >
        <div className={"player--featured__statistics-item__number"}>
          {this.props.player.cardsRed || "0"}
        </div>
        <div className={"player--featured__statistics-item__label"}>
          <span className={"stats__card stats__card--red"}></span>
        </div>
      </section>
    </aside>
  )
  renderPlayerLink = () => (
    <footer className={"player--featured__footer"}>
      <Link to={this.props.player.link} className="rich-link">
        Meer over {this.props.player.nameFirst} &raquo;
      </Link>
    </footer>
  )
  renderPlayerName = () => (
    <div className={"player--featured__name__wrapper"}>
      <h1 className={"player--featured__name"}>
        <span className={"player--featured__name-first"}>
          {this.props.player.nameFirst || "John"}
        </span>
        <span className={"player--featured__name-last"}>
          {this.props.player.nameLast || "Doe"}
        </span>
      </h1>
      <div className={"player--featured__bg-shirt-number"} aria-hidden="true">
        {this.props.player.shirtNr || "0"}
      </div>
    </div>
  )
  render() {
    return (
      <article className={"player--featured"}>
        {this.renderPlayerHeader()}
        <section className={"player--featured__content"}>
          {this.renderPlayerName()}
          {this.renderPlayerStats()}
          {this.props.player.link && this.renderPlayerLink()}
        </section>
      </article>
    )
  }
}

PlayerFeatured.propTypes = {
  player: PropTypes.instanceOf(PlayerMinimal).isRequired,
}

export default PlayerFeatured
