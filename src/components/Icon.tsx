import React, { FunctionComponent } from "react"

interface IconProps {
  icon: string
}

const Icon: FunctionComponent<IconProps> = (props) => <i className={`fa ${props.icon}`} aria-hidden={true}></i>

export default Icon
