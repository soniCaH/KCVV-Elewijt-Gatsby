import logo from "../images/logo-flat.png"
import "./Spinner.scss"
import React from "react"

export const Spinner = () => (
  <div className="spinner">
    <img src={logo} alt="Loading..." />
  </div>
)
