import { AltTitleProps } from "../Types/Title"
import "./AltTitle.scss"
import ReactFitText from "@kennethormandy/react-fittext"
import React from "react"

export const AltTitle = ({ variant, title, fitText }: AltTitleProps) => (
  <header className={`repeating_header repeating_header--${variant}`}>
    <h2 className="repeating_header__title">
      {fitText ? <ReactFitText compressor={2.5}>{title}</ReactFitText> : title}
    </h2>
    <span className="repeating_header__tag">
      {fitText ? <ReactFitText compressor={2}>{title}</ReactFitText> : title}
    </span>
  </header>
)

AltTitle.defaultProps = { variant: `black`, fitText: false }
