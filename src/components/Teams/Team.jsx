import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Players from './../Players/Players';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class Team extends Component {
  state = {
    activePlayer: 'None',
    teamName: this.props.teamData.teamName,
    playerStats: [
      // {
      //   playerName: "",
      //   stats: {
      //     pts: 0
      //   }
      // }
    ]
  };

  addOnePts = event => {
    let playerStatsCopy = JSON.parse(JSON.stringify(this.state.playerStats));
    if (this.state.activePlayer != 'None') {
      // new record
      if (playerStatsCopy.length == 0) {
        let playerStat = {};
        playerStat.playerName = this.state.activePlayer;
        let stats = {};
        stats.pts = 1;
        playerStat.stats = stats;
        this.setState({
          playerStats: [playerStat]
        });
      } else {
        let isUpdated = false;
        playerStatsCopy.map((playerStat, index) => {
          // update old record
          if (playerStat.playerName == this.state.activePlayer) {
            playerStat.stats.pts = playerStat.stats.pts + 1;
            playerStatsCopy[index] = playerStat;
            this.setState({
              playerStats: playerStatsCopy
            });
            isUpdated = true;
          } else if (!isUpdated && index == playerStatsCopy.length - 1) {
            playerStat.playerName = this.state.activePlayer;
            playerStat.stats.pts = 1;
            this.setState({
              playerStats: [...this.state.playerStats, playerStat]
            });
          }
          return null;
        });
      }
    }
  };

  selectPlayer = activePlayerName => {
    this.setState({
      activePlayer: activePlayerName
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>{this.props.teamData.teamName}</Col>
        </Row>

        <Row>Active player: {this.state.activePlayer}</Row>
        <Row>
          <Players
            selectPlayer={this.selectPlayer}
            key={this.props.teamData.teamId}
            playersData={this.props.teamData.teamPlayers}
          />
        </Row>

        <Row>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.addOnePts}
          >
            Add one Pts
          </button>
        </Row>

        <Row>
          <MDBTable>
            <MDBTableHead>
              <tr>
                <th>Name</th>
                <th>Points</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {this.state.playerStats.map(playerStat => {
                return (
                  <tr>
                    <td>{playerStat.playerName}</td>
                    <td>{playerStat.stats.pts}</td>
                  </tr>
                );
              })}
            </MDBTableBody>
          </MDBTable>
        </Row>
      </Container>
    );
  }
}

export default Team;
