import React from "react"
import classNames from "classnames"

import Icon from "./Icon"

import "./Card.scss"

interface CardProps {
  title: string
  className: string
  hasTable: boolean
  titleIcon: string
}
class Card extends React.Component<CardProps, {}> {
  public static defaultProps = {
    className: "",
    hasTable: false,
    titleIcon: "",
  }

  render(): JSX.Element {
    return (
      <article
        className={classNames("card", this.props.className, {
          "card--has-table": this.props.hasTable,
        })}
      >
        <header className={"card__header"}>
          <h4>
            {this.props.titleIcon !== "" && (
              <Icon icon={this.props.titleIcon} />
            )}{" "}
            {this.props.title}
          </h4>
        </header>
        <div className={"card__content"}>{this.props.children}</div>
      </article>
    )
  }
}

export default Card
