import "./Spinner.scss"

import React, { FunctionComponent } from "react"

import logo from "../images/logo-flat.png"

const Spinner: FunctionComponent = () => (
  <div className="spinner">
    <img src={logo} alt="Loading..." />
  </div>
)

export default Spinner
