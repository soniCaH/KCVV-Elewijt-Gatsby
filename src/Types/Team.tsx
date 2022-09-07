export interface TeamShort {
  field_division_full?: string
  field_vv_id: string
  title: string
}

interface TeamEdges {
  node: TeamShort
}
export interface TeamsListProps {
  teamEdges: { edges: TeamEdges[] }
}

export interface TeamQuery {
  data: {
    nodeTeam: Queries.node__team
  } & Queries.TeamQueryQuery
}
