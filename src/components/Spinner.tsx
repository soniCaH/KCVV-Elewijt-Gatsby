import React, { FunctionComponent } from "react"
import logo from "../images/logo-flat.png"

import "./Spinner.scss"

const Spinner: FunctionComponent = () => (
  <div className="spinner">
    <img src={logo} alt="Loading..." />
  </div>
)

export default Spinner
