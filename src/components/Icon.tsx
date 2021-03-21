import React, { FunctionComponent } from "react"

const Icon: FunctionComponent<IconProps> = (props) => <i className={`fa ${props.icon}`} aria-hidden={true}></i>

export default Icon
