import React, { Component } from "react"

import { CardImageOnly } from "../components/Card"

class Sponsor extends Component {
  render() {
    const { localFile, uri = null } = this.props

    return <CardImageOnly picture={localFile} link={uri} />
  }
}

export default Sponsor
