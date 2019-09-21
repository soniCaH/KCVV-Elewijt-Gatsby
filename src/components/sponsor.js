import React, { Component } from 'react'

import { CardImage } from '../components/cards'

class Sponsor extends Component {
  render() {
    const { title, localFile, uri = null } = this.props

    return <CardImage title={title} localFile={localFile} link={uri} />
  }
}

export default Sponsor
