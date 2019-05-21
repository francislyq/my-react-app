import React, { Component } from 'react';
import Team from './Team';

class Teams extends Component {
  state = {};
  render() {
    return this.props.teamsData.map(teamData => {
      return <Team teamData={teamData} key={teamData.teamId} />;
    });
  }
}

export default Teams;
