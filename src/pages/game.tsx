import ReactFitText from "@kennethormandy/react-fittext"
import { useState, useEffect, Fragment } from "react"
import { useSiteMetaData } from "../hooks/use-site-metadata"
import iconBench from "../images/i_bench_2.png"
import iconCardRed from "../images/i_card_red.png"
import iconCardYellow from "../images/i_card_yellow.png"
import iconCardYellowRed from "../images/i_card_yellow_red.png"
import iconGoal from "../images/i_goal.png"
import iconStart from "../images/i_start.png"
import iconSubIn from "../images/i_sub_in.png"
import iconSubOut from "../images/i_sub_out.png"
import { MatchDetails, MatchDetailsEventItem, MatchDetailsLineupItem, MatchDetailsSubstituteItem } from "../Types/Match"
import { GamePageProps } from "../Types/PageProps"
import { DateTime, Settings } from "luxon"
import React from "react"
import Layout from "../layouts"
import { Spinner } from "../components/Spinner"
import { Seo } from "../components/Seo"
import "./game.scss"
import { mapPsdStatus, request } from "../scripts/helper"
import LazyLoad from "react-lazy-load"
import Icon from "../components/Icon"
import { MiniRanking } from "../components/MiniRanking"

const officialCompetitionTypes = [
  'OFFICIAL',
  'COMPETITION',
  'Competitie'
]

const GamePage = ({ matchId }: GamePageProps) => {
  const { kcvvPsdApi } = useSiteMetaData()
  const [data, setData] = useState<MatchDetails>()

  useEffect(() => {
    async function getData() {
      const response = await request.get(`${kcvvPsdApi}/match/${matchId}`)
      setData(response.data)
    }
    getData()
  }, [kcvvPsdApi, matchId])

  Settings.defaultZone = `Europe/Brussels`
  Settings.defaultLocale = `nl-be`

  if (matchId === null) {
    return (
      <Layout>
        <main className="page__wrapper">Geen match beschikbaar...</main>
      </Layout>
    )
  }

  if (data) {
    const { general, substitutes, lineup, events = [] } = data || {}
    const { home: homeLineup = [], away: awayLineup = [] } = lineup || {}
    const { home: homeSubs = [], away: awaySubs = [] } = substitutes || {}

    const matchTime = DateTime.fromFormat(general.date, `yyyy-MM-dd HH:mm`)
    const homeTeamId = general.homeClub?.id

    const ogImage = {
      src: general?.homeClub?.logo,
      width: 180,
      height: 180,
    }

    return (
      <Layout>
        <Seo
          title={`Matchverslag ${general.homeClub?.abbreviation || general?.homeClub?.name} - ${
            general.awayClub?.abbreviation || general?.awayClub?.name
          }`}
          description={`Matchverslag ${general.homeClub?.abbreviation || general?.homeClub?.name} - ${
            general.awayClub?.abbreviation || general?.awayClub?.name
          }`}
          path={`/game/${general?.id}`}
          image={ogImage}
        />
        <header className="game__header__wrapper full-width">
          <div className="game__header__inner">
            <div className="game__teams">
              <div className={`game__teams-inner`}>
                <LazyLoad>
                  <img src={general.homeClub?.logo} alt={general.homeClub?.name} title={general.homeClub?.name} />
                </LazyLoad>
              </div>
              {renderScore(general.goalsHomeTeam, general.goalsAwayTeam)}
              <div className={`game__teams-inner`}>
                <LazyLoad>
                  <img src={general.awayClub?.logo} alt={general.awayClub?.name} title={general.awayClub?.name} />
                </LazyLoad>
              </div>
            </div>
            <h1>
              <ReactFitText compressor={2.5}>{`${general.homeClub?.abbreviation || general.homeClub?.name} - ${
                general.awayClub?.abbreviation || general.awayClub?.name
              }`}</ReactFitText>
            </h1>
            <h4>{general.competitionType}</h4>
            <time dateTime={matchTime.toFormat(`EEEE dd LLLL - H:mm`)}>
              {matchTime.toFormat(`EEEE dd LLLL - H:mm`)}
            </time>
            <br />

            {general.status !== 0 && (
              <span className={`game__status game__status--${general.status}`}>{mapPsdStatus(general.status)}</span>
            )}

            <br />
          </div>
        </header>

        <main className="page__wrapper">
          {(homeLineup.length !== 0 || awayLineup.length !== 0) && (
            <div className={`lineup__wrapper`}>
              <div className={`lineup__wrapper--home`}>
                <h3>{general.homeClub?.abbreviation || general.homeClub?.name}</h3>
                {homeLineup && renderLineup(homeLineup, homeSubs)}
              </div>
              <div className={`lineup__wrapper--away`}>
                <h3>{general.awayClub?.abbreviation || general.awayClub?.name}</h3>
                {awayLineup && renderLineup(awayLineup, awaySubs)}
              </div>
            </div>
          )}
        </main>

        <section className="page__wrapper">
          {events.length !== 0 && (
            <div className={`event__wrapper`}>
              <h3>Gebeurtenissen</h3>
              {events && renderEvents(events, homeTeamId)}
            </div>
          )}

          {officialCompetitionTypes.includes(general.competitionType) && (
            <MiniRanking
              teamId={general.homeTeamId || general.awayTeamId || 0}
              homeTeam={general.homeClub?.name}
              awayTeam={general.awayClub?.name}
            />
          )}
        </section>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Spinner />
      </Layout>
    )
  }
}

const renderScore = (resultHome?: number, resultAway?: number) => {
  return resultHome !== null && resultAway !== null ? (
    <div className={`game__details__vs game__details__vs--score`}>
      {renderScoreWithWinnerIndicator(resultHome || 0, resultAway || 0, `home`)}
      <span className={`match-details__divider`}>&nbsp;-&nbsp;</span>
      {renderScoreWithWinnerIndicator(resultAway || 0, resultHome || 0, `away`)}
    </div>
  ) : (
    <div className={`game__details__vs`}>VS</div>
  )
}

const renderScoreWithWinnerIndicator = (result1: number, result2: number, extraClass?: string) => {
  return result1 > result2 ? (
    <span className={`game__details__winner game__details__winner--${extraClass}`}>{result1}</span>
  ) : (
    <span className={`game__details__loser`}>{result1}</span>
  )
}

const renderLineup = (lineup: MatchDetailsLineupItem[], substitutes: MatchDetailsSubstituteItem[]) => {
  return (
    <Fragment>
      {renderLineupHeader()}
      {lineup.map((element, i) => renderLineupLine(i, element))}
      <hr />
      {substitutes.map((element, i) => renderSubLine(i, element))}
    </Fragment>
  )
}

const renderLineupHeader = () => {
  return (
    <div className={`lineup__header`}>
      <span className={`lineup__header__item lineup__item--status`}></span>
      <span className={`lineup__header__item lineup__item--number`}>#</span>
      <span className={`lineup__header__item lineup__item--name`}>Name</span>
      <span className={`lineup__header__item lineup__item--time`}>
        <Icon icon="fa-clock-o" />
      </span>
    </div>
  )
}

const renderLineupLine = (i: React.Key, element: MatchDetailsLineupItem) => {
  return (
    <div className={`lineup__row lineup__row--lineup`} key={i}>
      <span
        className={`lineup__row__item lineup__item--status`}
        style={{
          backgroundImage: `url(${element.changed ? iconSubOut : iconStart})`,
        }}
        title={`${element.changed ? `Basisspeler gewisseld` : `Basisspeler`}`}
      ></span>
      <span className={`lineup__row__item lineup__item--number`}>{element.number}</span>
      <span className={`lineup__row__item lineup__item--name`}>
        {element.playerName} {element.captain && `(C)`}
      </span>
      <span className={`lineup__row__item lineup__item--time`}>{element.minutesPlayed}'</span>
    </div>
  )
}

const renderSubLine = (i: React.Key, element: MatchDetailsSubstituteItem) => {
  return (
    <div className={`lineup__row lineup__row--substitute`} key={i}>
      <span
        className={`lineup__row__item lineup__item--status`}
        style={{
          backgroundImage: `url(${element.changed ? iconSubIn : iconBench})`,
        }}
        title={`${element.changed ? `Wisselspeler ingevallen` : `Wisselspeler`}`}
      ></span>
      <span className={`lineup__row__item lineup__item--number`}>{element.number}</span>
      <span className={`lineup__row__item lineup__item--name`}>{element.playerName}</span>
      <span className={`lineup__row__item lineup__item--time`}>{element.minutesPlayed}'</span>
    </div>
  )
}

const renderEvents = (events: MatchDetailsEventItem[], homeTeamId: number) => {
  return <Fragment>{events.map((element, i) => renderEventLine(i, element, homeTeamId))}</Fragment>
}

const renderEventLine = (i: React.Key, element: MatchDetailsEventItem, homeTeamId: number) => {
  const homeTeam = element.clubId == homeTeamId
  let actionIcon = null
  let actionMessage = ``
  let actionText = ``

  // Backwards compatibility:
  if (typeof element.action === `string`) {
    switch (element.action) {
      case `geel`:
        actionIcon = iconCardYellow
        actionText = `Gele kaart voor`
        actionMessage = `Gele kaart`
        break
      case `rood`:
        actionIcon = iconCardRed
        actionText = `Rode kaart voor`
        actionMessage = `Rode kaart`
        break
      case `tweedegeel`:
        actionIcon = iconCardYellowRed
        actionText = `Tweede gele kaart voor`
        actionMessage = `Tweede gele kaart`
        break
      case `doelpunt`:
        actionIcon = iconGoal
        actionText = `${element?.goalsHome} - ${element?.goalsAway} — Doelpunt gescoord door`
        actionMessage = `Doelpunt`
        break
      case `minuteOut`:
        actionIcon = iconSubOut
        actionText = `Speler uit:`
        actionMessage = `Wissel`
        break
      case `minuteIn`:
        actionIcon = iconSubIn
        actionText = `Speler in:`
        actionMessage = `Wissel`
        break
    }
  } else {
    switch (element.action.type) {
      case `GOAL`:
        actionIcon = iconGoal
        actionText = `${element?.goalsHome} - ${element?.goalsAway} — Doelpunt gescoord door`
        actionMessage = `Doelpunt`
        break
      case `CARD`:
        switch (element.action.subtype) {
          case `YELLOW`:
            actionIcon = iconCardYellow
            actionText = `Gele kaart voor`
            actionMessage = `Gele kaart`
            break
          case `RED`:
            actionIcon = iconCardRed
            actionText = `Rode kaart voor`
            actionMessage = `Rode kaart`
            break
          case `DOUBLE_YELLOW`:
            actionIcon = iconCardYellowRed
            actionText = `Tweede gele kaart voor`
            actionMessage = `Tweede gele kaart`
            break
        }
    }
  }

  return (
    <div className={`event__row ${homeTeam ? `event__row--home` : `event__row--away`}`} key={i}>
      {homeTeam && (
        <span className={`event__row__item event__row__item--home lineup__item--name`}>
          {actionText} {element.playerName}
        </span>
      )}
      {homeTeam && (
        <span
          className={`event__row__item event__row__item--home lineup__item--action center`}
          style={{ backgroundImage: `url(${actionIcon})` }}
          title={actionMessage}
        ></span>
      )}
      <span className={`event__row__item lineup__item--time center`}>{element.minute}'</span>
      {homeTeam || (
        <span
          className={`event__row__item event__row__item--away lineup__item--action center`}
          style={{ backgroundImage: `url(${actionIcon})` }}
          title={actionMessage}
        ></span>
      )}
      {homeTeam || (
        <span className={`event__row__item event__row__item--away lineup__item--name`}>
          {actionText} {element.playerName}
        </span>
      )}
    </div>
  )
}

export default GamePage
