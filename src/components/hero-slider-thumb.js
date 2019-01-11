import React, { Component } from 'react'
import './hero-slider-thumb.scss'

class HeroSliderThumb extends Component {
  render() {
    return (
      <div className="hero-slider-thumbs__item">
        <div className="posts__item post__category--club">
          <div className="posts__inner">
            <div className="posts__cat">
              <span className="label posts__cat-label">Eerste ploeg</span>
            </div>
            <h6 className="posts__title">KCVV Elewijt <strong>klaar voor de terugronde</strong></h6>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroSliderThumb
