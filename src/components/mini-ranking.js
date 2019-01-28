import React, { Component } from 'react'

class MiniRanking extends Component {
  render() {
    this.props.ranking.sort((a, b) => a.position - b.position)

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
              <tr key={i}>
                <td>{rank.position}</td>
                <td>{rank.team}</td>
                <td>{rank.points}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default MiniRanking
