import React, { Component } from 'react'

import './index.scss'
import PageHeader from '../components/page-header'
import { PageHeaderMobile } from '../components/page-header'

class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <React.Fragment>
        <PageHeaderMobile />
        <PageHeader />

        {children}

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
