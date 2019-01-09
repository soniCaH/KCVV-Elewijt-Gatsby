import React, { Component, Fragment } from 'react'

import Slider from 'react-slick'

import './hero-slider.scss'
import HeroSliderSlide from './hero-slider-slide'
import HeroSliderThumb from './hero-slider-thumb'

class HeroSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav_hero: null,
      nav_thumbs: null,
    }
  }
  componentDidMount() {
    this.setState({
      nav_hero: this.nav_hero_slider,
      nav_thumbs: this.nav_thumbs_slider,
    })
  }
  render() {
    const settings_nav_hero = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: false,
      focusOnSelect: true,
      autoplaySpeed: 8000,

      responsive: [
        {
          breakpoint: 992,
          settings: {
            fade: false,
          },
        },
      ],
    }

    const settings_nav_thumbs = {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      centerMode: false,
      focusOnSelect: true,
    }

    return (
      <Fragment>
        <Slider
          className={'heroSlider'}
          asNavFor={this.state.nav_thumbs}
          ref={slider => (this.nav_hero_slider = slider)}
          {...settings_nav_hero}
        >
          <div>
            <HeroSliderSlide />
          </div>
          <div>
            <HeroSliderSlide />
          </div>
          <div>
            <HeroSliderSlide />
          </div>
          <div>
            <HeroSliderSlide />
          </div>
        </Slider>
        <Slider
          className={'heroSliderThumbs grid-container'}
          asNavFor={this.state.nav_hero}
          ref={slider => (this.nav_thumbs_slider = slider)}
          {...settings_nav_thumbs}
        >
          <div>
            <HeroSliderThumb />
          </div>
          <div>
            <HeroSliderThumb />
          </div>
          <div>
            <HeroSliderThumb />
          </div>
          <div>
            <HeroSliderThumb />
          </div>
        </Slider>
      </Fragment>
    )
  }
}

export default HeroSlider
