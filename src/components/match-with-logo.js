import React, { Component } from "react"
import ClubLogo from "./clublogo"
import { mapMatchStatus, formatDivision } from "../scripts/helper"
import "./match-with-logo.scss"
import moment from "moment"
import "moment/locale/nl-be"

class MatchWithLogo extends Component {
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

            {status ? (
              <>
                <time
                  dateTime={matchTime.format("YYYY-MM-DD - H:mm")}
                  className={
                    "match-details__datetime match-details__datetime--date"
                  }
                >
                  {matchTime.format("dddd DD MMMM - H:mm")}
                </time>
                <div
                  className={
                    "match-details__status match-details__datetime--time"
                  }
                >
                  {mapMatchStatus(status)}
                </div>
              </>
            ) : (
              <>
                <time
                  dateTime={matchTime.format("YYYY-MM-DD")}
                  className={
                    "match-details__datetime match-details__datetime--date"
                  }
                >
                  {matchTime.format("dddd DD MMMM YYYY")}
                </time>
                <time
                  dateTime={matchTime.format("H:mm")}
                  className={
                    "match-details__datetime match-details__datetime--time"
                  }
                >
                  {matchTime.format("H:mm")}
                </time>
              </>
            )}
          </header>
          <main>
            <section className={"match-details__lineup"}>
              <div className={"match-details__lineup-inner"}>
                <ClubLogo
                  regNumber={regNumberHome}
                  title={home}
                  className={"match-details__logo match-details__logo--home"}
                  lazyload={lazyload}
                />
                <div className={"match-details__teamname"}>{home}</div>
              </div>
              {typeof resultHome !== "undefined" &&
              typeof resultAway !== "undefined" ? (
                <div className={"match-details__vs match-details__vs--score"}>
                  {resultHome > resultAway ? (
                    <span
                      className={
                        "match-details__winner match-details__winner--home"
                      }
                    >
                      {resultHome}
                    </span>
                  ) : (
                    <span className={"match-details__loser"}>{resultHome}</span>
                  )}
                  <span className={"match-details__divider"}> - </span>
                  {resultAway > resultHome ? (
                    <span
                      className={
                        "match-details__winner match-details__winner--away"
                      }
                    >
                      {resultAway}
                    </span>
                  ) : (
                    <span className={"match-details__loser"}>{resultAway}</span>
                  )}
                </div>
              ) : (
                <div className={"match-details__vs"}>VS</div>
              )}
              <div className={"match-details__lineup-inner"}>
                <ClubLogo
                  regNumber={regNumberAway}
                  title={away}
                  className={"match-details__logo match-details__logo--away"}
                  lazyload={lazyload}
                />
                <div className={"match-details__teamname"}>{away}</div>
              </div>
            </section>
          </main>
          <footer />
        </div>
      </article>
    )
  }
}

export default MatchWithLogo
