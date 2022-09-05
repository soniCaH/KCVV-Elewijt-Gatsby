import { Article } from "../Types/Article"
import React from "react"

export const HeroSection2 = ({ article }: HeroClassProps) => <section>{article.title}</section>

type HeroClassProps = {
  article: Article
}
