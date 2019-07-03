import React, { Component, Fragment } from 'react'

// import './index.scss'
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
