import React, { FunctionComponent } from "react"

const Icon: FunctionComponent<IconProps> = (props) => (
  <i className={`fa ${props.icon}`} aria-hidden={true} title={props.alt || ``}></i>
)

export default Icon
