import axios from "axios"
import { graphql, useStaticQuery } from "gatsby"
import React, { Fragment, FunctionComponent, useState } from "react"
import { useEffect } from "react"
import Slider, { LazyLoadTypes } from "react-slick"

import { MatchTeaserDetail } from "./MatchTeaser"
import "./MatchesSlider.scss"
import Spinner from "./Spinner"

const MatchesSlider: FunctionComponent = () => {
  const [data, setData] = useState<Match[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const {
    site: {
      siteMetadata: { kcvvPsdApi },
    },
  }: MatchesQueryData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          kcvvPsdApi
        }
      }
    }
  `)

  const settings_slickslider = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    lazyLoad: `progressive` as LazyLoadTypes,

    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${kcvvPsdApi}/matches/next`)
      setData(response.data)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <Fragment>
      {data.length > 0 || loading === false || (
        <div className="matches_slider__wrapper">
          <Spinner />
        </div>
      )}
      {data.length > 0 && (
        <div className="matches_slider__wrapper">
          <Slider className={`matches_slider`} {...settings_slickslider}>
            {data
              .sort((a, b) => a.timestamp - b.timestamp)
              .map((match: Match, i) => {
                return (
                  <div className="matches_slider__item" key={i} data-equalizer-watch="true">
                    <MatchTeaserDetail match={match} />
                  </div>
                )
              })}
          </Slider>
        </div>
      )}
    </Fragment>
  )
}

export default MatchesSlider
