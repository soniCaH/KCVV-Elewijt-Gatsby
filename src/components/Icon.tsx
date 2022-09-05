import { IconProps } from "../Types/Icon"
import React from "react"

const Icon = (props: IconProps) => <i className={`fa ${props.icon}`} aria-hidden={true} title={props.alt || ``}></i>

export default Icon
