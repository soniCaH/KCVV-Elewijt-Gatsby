import React, {FunctionComponent} from "react"
import classNames from "classnames"

import Icon from "./Icon"

import "./Card.scss"

const Card: FunctionComponent<CardProps> = ({
  className,
  hasTable,
  title,
  titleIcon,
  children,
}) => (
  <article
    className={classNames("card", className, {
      "card--has-table": hasTable,
    })}
  >
    <header className={"card__header"}>
      <h4>
        {titleIcon !== "" && <Icon icon={titleIcon} />} {title}
      </h4>
    </header>
    <div className={"card__content"}>{children}</div>
  </article>
);

Card.defaultProps = {
  className: "",
  hasTable: false,
  titleIcon: "",
}

export default Card
