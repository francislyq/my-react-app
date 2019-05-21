import React, { Component } from 'react';
import { Col, Alert } from 'react-bootstrap';

class Player extends Component {
  activePlayer = event => {
    let activePlayerName = event.target.getAttribute('name');
    this.props.onActivePlayerChange(activePlayerName);
    //console.log(activePlayerName);
  };

  render() {
    return (
      <Col>
        <Alert variant="primary">
          <Alert.Link
            href=""
            onClick={this.activePlayer}
            name={this.props.playerData.playerName}
          >
            {this.props.playerData.playerName}
          </Alert.Link>
        </Alert>
      </Col>
    );
  }
}

export default Player;
