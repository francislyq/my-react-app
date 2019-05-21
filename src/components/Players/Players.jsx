import React, { Component } from 'react';
import Player from './Player';

class Players extends Component {
  onActivePlayerChange = activePlayerName => {
    console.log(activePlayerName);
    this.props.selectPlayer(activePlayerName);
  };

  render() {
    return this.props.playersData.map(playerData => {
      return (
        <Player
          onActivePlayerChange={this.onActivePlayerChange}
          key={playerData.playerId}
          playerData={playerData}
        />
      );
    });
  }
}

export default Players;
