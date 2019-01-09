import React, { Component } from 'react'

import './index.scss'
import PageHeader from '../components/page-header'
import { PageHeaderMobile } from '../components/page-header'
import HeroSlider from '../components/hero-slider'

class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <React.Fragment>
        <PageHeaderMobile />
        <PageHeader />

        <HeroSlider />
        <div className="grid-container">
          <div className="grid-x">
            <main className="cell large-8">{children}</main>
            <aside className="cell large-4">SIDEBAR</aside>
          </div>
        </div>

        <footer>FOOTER</footer>
      </React.Fragment>
    )
  }

  componentDidMount() {
    const $ = require('jquery')
    // eslint-disable-next-line
    const foundation = require('foundation-sites')
    $(document).foundation()
  }
}

export default Layout
