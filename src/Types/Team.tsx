// import { Pathalias } from "./Drupal"

// interface Team {
//   title: string
//   path: Pathalias
//   field_contact_info: {
//     processed: string
//   }
// }

export interface TeamQuery {
  data: {
    nodeTeam: Queries.node__team
  } & Queries.TeamQueryQuery
}