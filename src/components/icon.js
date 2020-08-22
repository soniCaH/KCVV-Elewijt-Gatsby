import React, { Component } from "react"

class Icon extends Component {
  render() {
    const { icon } = this.props

    return <i className={`fa ${icon}`} aria-hidden={true}></i>
  }
}

export default Icon
