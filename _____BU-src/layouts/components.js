import React, { Component, Fragment } from 'react'

import './index.scss'
import './components.scss'

class Layout extends Component {
  render() {
    const { children } = this.props

    return <Fragment>{children}</Fragment>
  }

  componentDidMount() {
    const $ = require('jquery')
    // eslint-disable-next-line
    const foundation = require('foundation-sites')
    $(document).foundation()
  }
}

export default Layout
