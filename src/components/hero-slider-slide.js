import React, { Component } from 'react'
import './hero-slider-slide.scss'

class HeroSliderSlide extends Component {
  render() {
    return (
      <div className="hero-slider__item hero-slider__item--1">
        <div className="grid-container hero-slider__item-container">
          <div className="grid-x">
            <div className="cell medium-8 medium-offset-2">
              <div className="post__meta-block post__meta-block--top">
                <div className="post__category">
                  <span className="label posts__cat-label">category.name</span>
                </div>
                <h2 className="page-heading__title">
                  <a href="_soccer_blog-post-1.html">title.onslide #1</a>
                </h2>
                <ul className="post__meta meta">
                  <li className="meta__item meta__item--date">
                    <time dateTime="2017-08-23">date</time>
                  </li>
                  <li className="meta__item meta__item--views">meta.views</li>
                  <li className="meta__item meta__item--likes">
                    <a href="index.html">
                      <i className="meta-like meta-like--active icon-heart" />{' '}
                      meta.likes
                    </a>
                  </li>
                  <li className="meta__item meta__item--comments">
                    <a href="index.html">meta.comments</a>
                  </li>
                </ul>
                <div className="post-author">
                  <figure className="post-author__avatar">
                    <img
                      src="{{../root}}assets/images/samples/author.avatar"
                      alt="Post Author Avatar"
                    />
                  </figure>
                  <div className="post-author__info">
                    <h4 className="post-author__name">author.name</h4>
                    <span className="post-author__slogan">author.slogan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroSliderSlide
