import { TeamShort } from "./Drupal"

export interface TeamsListProps {
  teamEdges: { edges: TeamEdges[] }
}

interface TeamEdges {
  node: TeamShort
}
