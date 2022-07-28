import React from "react"

import logo from "../images/logo-flat.png"
import "./Spinner.scss"

export const Spinner = () => (
  <div className="spinner">
    <img src={logo} alt="Loading..." />
  </div>
)
