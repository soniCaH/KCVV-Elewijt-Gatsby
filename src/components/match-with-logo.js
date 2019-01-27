import React, { Component } from 'react'
import ClubLogo from './clublogo'
import { mapMatchStatus, formatDivision } from '../script/helper'
import './match-with-logo.scss'
import moment from 'moment'
import 'moment/locale/nl-be'

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

    moment.locale('nl-be')
    const matchTime = moment(dateTime)

    return (
      <article className={'match-details--with-logo match-details'}>
        <div className={'match-details__inner'}>
          <header>
            <h5>{formatDivision(division, region)}</h5>

            {status ? (
              <>
                <time
                  dateTime={'2019-06-30 12:30'}
                  className={
                    'match-details__datetime match-details__datetime--date'
                  }
                >
                  {matchTime.format('dddd DD MMMM - H:mm')}
                </time>
                <div
                  className={
                    'match-details__status match-details__datetime--time'
                  }
                >
                  {mapMatchStatus(status)}
                </div>
              </>
            ) : (
              <>
                <time
                  dateTime={'2019-06-30 12:30'}
                  className={
                    'match-details__datetime match-details__datetime--date'
                  }
                >
                  {matchTime.format('dddd DD MMMM YYYY')}
                </time>
                <time
                  dateTime={matchTime.format()}
                  className={
                    'match-details__datetime match-details__datetime--time'
                  }
                >
                  {matchTime.format('H:mm')}
                </time>
              </>
            )}
          </header>
          <main>
            <section className={'match-details__lineup'}>
              <div className={'match-details__lineup-inner'}>
                <ClubLogo
                  regNumber={regNumberHome}
                  title={home}
                  className={'match-details__logo match-details__logo--home'}
                />
              </div>
              {typeof resultHome !== 'undefined' &&
              typeof resultAway !== 'undefined' ? (
                <div className={'match-details__vs'}>
                  {resultHome}-{resultAway}
                </div>
              ) : (
                ''
              )}
              <div className={'match-details__lineup-inner'}>
                <ClubLogo
                  regNumber={regNumberAway}
                  title={away}
                  className={'match-details__logo match-details__logo--away'}
                />
              </div>
            </section>
            <section className={'match-details__lineup'}>
              <div className={'match-details__lineup-inner'}>
                <div className={'match-details__teamname'}>{home}</div>
              </div>
              <div className={'match-details__lineup-inner'}>
                <div className={'match-details__teamname'}>{away}</div>
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
