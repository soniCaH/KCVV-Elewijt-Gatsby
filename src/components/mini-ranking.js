import React, { Component } from 'react'

class MiniRanking extends Component {
  render() {
    if (this.props.ranking.length <= 0) {
      return <span>Nog geen klassement opgemaakt</span>
    }

    this.props.ranking.sort((a, b) => {
      return a && a.position - b.position
    })

    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {this.props.ranking.map((rank, i) => {
            return (
              rank && (
                <tr key={i}>
                  <td>{rank.position}</td>
                  <td className={rank.team.includes("Elewijt") ? 'team-ranking__winner' : undefined}>{rank.team}</td>
                  <td>{rank.points}</td>
                </tr>
              )
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default MiniRanking
