import React from "react"

import { Article } from "../Types/Article"

export const HeroSection2 = ({ article }: HeroClassProps) => <section>{article.title}</section>

type HeroClassProps = {
  article: Article
}
