import React from "react"

import { AltTitleProps } from "../Types/Title"
import "./AltTitle.scss"

export const AltTitle = ({ variant, title }: AltTitleProps) => (
  <header className={`repeating_header repeating_header--${variant}`}>
    <h2 className="repeating_header__title">{title}</h2>
    <span className="repeating_header__tag">{title}</span>
  </header>
)

AltTitle.defaultProps = { variant: `black` }
