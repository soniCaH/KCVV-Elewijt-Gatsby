import React, { Component, Fragment } from 'react'

// import './index.scss'
import PageHeader from '../components/page-header'
import { PageHeaderMobile } from '../components/page-header'
import PageFooter from '../components/page-footer'

class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <div className={"off-canvas-wrapper"}>
          <PageHeaderMobile />
          <PageHeader />

          <main className={"off-canvas-content"} data-off-canvas-content>
            {children}
          </main>

          <PageFooter />
        </div>
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
