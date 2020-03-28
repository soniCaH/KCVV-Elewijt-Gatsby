import React, { Component } from "react"
import ClubLogo from "./clublogo"
import { mapMatchStatus, formatDivision } from "../scripts/helper"
import "./match-with-logo.scss"
import moment from "moment"
import "moment/locale/nl-be"

class MatchWithLogo extends Component {
  renderScoreWithWinnerIndicator = (result1, result2, extraClass) => {
    return result1 > result2 ? (
      <span
        className={`match-details__winner match-details__winner--${extraClass}`}
      >
        {result1}
      </span>
    ) : (
      <span className={"match-details__loser"}>{result1}</span>
    )
  }
  renderScore = (resultHome, resultAway) => {
    return typeof resultHome !== "undefined" &&
      typeof resultAway !== "undefined" ? (
      <div className={"match-details__vs match-details__vs--score"}>
        {this.renderScoreWithWinnerIndicator(resultHome, resultAway, "home")}
        <span className={"match-details__divider"}> - </span>
        {this.renderScoreWithWinnerIndicator(resultAway, resultHome, "away")}
      </div>
    ) : (
      <div className={"match-details__vs"}>VS</div>
    )
  }

  renderTeam = (regNumber, title, lazyload, extraClass) => {
    return (
      <div className={"match-details__lineup-inner"}>
        <ClubLogo
          regNumber={regNumber}
          title={title}
          className={`match-details__logo match-details__logo--${extraClass}`}
          lazyload={lazyload}
        />
        <div className={"match-details__teamname"}>{title}</div>
      </div>
    )
  }

  renderMatchWithStatusHeader = (matchTime, status) => {
    return (
      <>
        <time
          dateTime={matchTime.format("YYYY-MM-DD - H:mm")}
          className={"match-details__datetime match-details__datetime--date"}
        >
          {matchTime.format("dddd DD MMMM - H:mm")}
        </time>
        <div className={"match-details__status match-details__datetime--time"}>
          {mapMatchStatus(status)}
        </div>
      </>
    )
  }

  renderMatchWithoutStatusHeader = (matchTime) => {
    return (
      <>
        <time
          dateTime={matchTime.format("YYYY-MM-DD")}
          className={"match-details__datetime match-details__datetime--date"}
        >
          {matchTime.format("dddd DD MMMM YYYY")}
        </time>
        <time
          dateTime={matchTime.format("H:mm")}
          className={"match-details__datetime match-details__datetime--time"}
        >
          {matchTime.format("H:mm")}
        </time>
      </>
    )
  }

  renderMatchWithStatusHeader = (matchTime, status) => {
    return (
      <>
        <time
          dateTime={matchTime.format("YYYY-MM-DD - H:mm")}
          className={"match-details__datetime match-details__datetime--date"}
        >
          {matchTime.format("dddd DD MMMM - H:mm")}
        </time>
        <div className={"match-details__status match-details__datetime--time"}>
          {mapMatchStatus(status)}
        </div>
      </>
    )
  }
  render() {
    const {
      // season,
      region,
      division,
      dateTime,
      home,
      away,
      resultHome,
      resultAway,
      status,
      // matchDay,
      regNumberHome,
      regNumberAway,
    } = this.props.match

    moment.locale("nl-be")

    const lazyload = this.props.lazyload && true

    const matchTime = moment(dateTime)

    return (
      <article className={"match-details--with-logo match-details"}>
        <div className={"match-details__inner"}>
          <header>
            <h5>{formatDivision(division, region)}</h5>

            {status
              ? this.renderMatchWithStatusHeader(matchTime, status)
              : this.renderMatchWithoutStatusHeader(matchTime)}
          </header>
          <main>
            <section className={"match-details__lineup"}>
              {this.renderTeam(regNumberHome, home, lazyload, "home")}
              {this.renderScore(resultHome, resultAway)}
              {this.renderTeam(regNumberAway, away, lazyload, "away")}
            </section>
          </main>
          <footer />
        </div>
      </article>
    )
  }
}

export default MatchWithLogo
