import React, { Component } from 'react'
import './hero-slider-thumb.scss'

class HeroSliderThumb extends Component {
  render() {
    return (
      <div className="hero-slider-thumbs__item">
        <div className="posts__item posts__item--category.class">
          <div className="posts__inner">
            <div className="posts__cat">
              <span className="label posts__cat-label">category.name 1</span>
            </div>
            <h6 className="posts__title">title.onthumb</h6>
            <time datetime="2017-12-12" className="posts__date">
              date
            </time>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroSliderThumb
