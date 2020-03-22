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
      {this.renderGamesPlayed(this.props.player.gamesPlayed)}

      {this.props.player.position === "k" &&
        this.renderCleansheets(this.props.player.cleanSheets)}

      {this.props.player.position !== "k" &&
        this.renderGoals(this.props.player.goalsScored)}

      {this.renderCards(this.props.player.cardsYellow, "yellow")}
      {this.renderCards(this.props.player.cardsRed, "red")}
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
  renderGamesPlayed = gamesPlayed => (
    <section className={"player--featured__statistics-item"}>
      <div className={"player--featured__statistics-item__number"}>
        {gamesPlayed || "0"}
      </div>
      <div className={"player--featured__statistics-item__label"}>
        Wedstrijden
      </div>
    </section>
  )
  renderCleansheets = cleanSheets => (
    <section className={"player--featured__statistics-item"}>
      <div className={"player--featured__statistics-item__number"}>
        {cleanSheets || "0"}
      </div>
      <div className={"player--featured__statistics-item__label"}>
        Cleansheets
      </div>
    </section>
  )
  renderGoals = goalsScored => (
    <section className={"player--featured__statistics-item"}>
      <div className={"player--featured__statistics-item__number"}>
        {goalsScored || "0"}
      </div>
      <div className={"player--featured__statistics-item__label"}>
        Doelpunten
      </div>
    </section>
  )

  renderCards = (cards, color) => (
    <section
      className={
        "player--featured__statistics-item player--featured__statistics-item--cards"
      }
    >
      <div className={"player--featured__statistics-item__number"}>
        {cards || "0"}
      </div>
      <div className={"player--featured__statistics-item__label"}>
        <span className={`stats__card stats__card--${color}`}></span>
      </div>
    </section>
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
