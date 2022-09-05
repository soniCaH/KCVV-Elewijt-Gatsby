import { Pathalias } from "./Drupal"

export interface SearchResult {
  type: string
  attributes: {
    drupal_internal__nid: string
    path: Pathalias
    title: string
  }
}
