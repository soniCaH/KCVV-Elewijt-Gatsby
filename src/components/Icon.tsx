import React from "react"
import { IconProps } from "../Types/Icon"

const Icon = (props: IconProps) => <i className={`fa ${props.icon}`} aria-hidden={true} title={props.alt || ``}></i>

export default Icon
