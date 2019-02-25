import React, { Component, Fragment } from 'react'

import './index.scss'
import PageHeader from '../components/page-header'
import { PageHeaderMobile } from '../components/page-header'
import PageFooter from '../components/page-footer';

class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <PageHeaderMobile />
        <PageHeader />

        {children}

        <div className="video--bg">
          <video autoPlay muted loop>
            <source src="./video/kcvv-earth.mp4" type="video/mp4" />
          </video>
          <div className="video--content">KCVV Elewijt<br/>
          Driesstraat 30, 1982 Elewijt<br/>
          info@kcvvelewijt.be</div>
        </div>

        <PageFooter />
      </Fragment>
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
