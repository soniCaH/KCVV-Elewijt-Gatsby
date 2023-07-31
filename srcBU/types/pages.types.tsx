import { TeamShort, PlayerShort } from "./Drupal"

export interface TeamsListProps {
  teamEdges: { edges: TeamEdges[] }
}

interface TeamEdges {
  node: TeamShort
}
