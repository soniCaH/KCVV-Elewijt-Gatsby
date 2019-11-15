import React, { Component } from 'react'

import { SingleImageCard } from '../components/cards'

class Sponsor extends Component {
  render() {
    const { localFile, uri = null } = this.props

    return <SingleImageCard localFile={localFile} link={uri} />
  }
}

export default Sponsor
