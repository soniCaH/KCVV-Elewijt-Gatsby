import React, { Component } from 'react'

class FeaturedEvent extends Component {
  render() {
    const { event, key = null } = this.props

    return (
      <article
        className={
          'small-12' +
          ' cell featured__news-item article-card featured__event-item'
        }
        key={key}
      >
        <div className={'posts__item posts__item--card card posts__event'}>
          <figure className="posts__thumb">
            <a href={event.event.link}>
              <img src={event.event.image} alt={event.event.title} />
            </a>
          </figure>
          <div className="posts__inner card__content">
            <time
              className={'posts__date'}
              dateTime={`${event.event.dateStart}/${event.event.dateEnd}`}
            >
              {event.event.dateStart} - {event.event.dateEnd}
            </time>
            <h6 className="posts__title">
              <a
                href={event.event.link}
                dangerouslySetInnerHTML={{
                  __html: event.event.title,
                }}
              />
            </h6>
            <div
              className="posts__excerpt"
              dangerouslySetInnerHTML={{
                __html: event.event.text,
              }}
            />
          </div>
        </div>
      </article>
    )
  }
}

export default FeaturedEvent
