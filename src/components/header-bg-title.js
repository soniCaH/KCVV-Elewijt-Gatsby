import "./header-bg-title.scss"

import PropTypes from "prop-types"
import React from "react"

class HeaderBgTitle extends React.Component {
  render() {
    return (
      <header className={`page-header-title ${this.props.classes || ``}`}>
        <h1>
          {this.props.title} {this.props.highlight && <span className={`highlight`}>{this.props.highlight}</span>}
        </h1>
      </header>
    )
  }
}

HeaderBgTitle.propTypes = {
  title: PropTypes.string.isRequired,
  highlight: PropTypes.string,
  classes: PropTypes.string,
}

export default HeaderBgTitle
