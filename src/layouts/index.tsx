import React, { Fragment } from "react"
import { FunctionComponent } from "react"

import { PageHeader, PageHeaderMobile } from "../components/PageHeader"

const Layout: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <div className={`off-canvas-wrapper`}>
        <PageHeaderMobile />
        <PageHeader />

        <main className={`off-canvas-content`} data-off-canvas-content>
          {children}
        </main>
      </div>
    </Fragment>
  )
}

export default Layout
