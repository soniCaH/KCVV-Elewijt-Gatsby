import { KcvvTv } from "../types/Drupal"

export interface KcvvTvOverviewQueryData {
  videos: {
    edges: KcvvTvEdge[]
  }
}

export interface KcvvTvEdge {
  node: KcvvTv
}
