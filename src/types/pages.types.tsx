import { TeamShort, PlayerShort } from "./Drupal"

export interface TeamsListProps {
  teamEdges: { edges: TeamEdges[] }
}

export interface PlayerListProps {
  playerEdges: { edges: PlayerEdges[] }
}

interface TeamEdges {
  node: TeamShort
}

interface PlayerEdges {
  node: PlayerShort
}
