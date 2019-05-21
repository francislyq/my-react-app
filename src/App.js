import React from 'react';

// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/stylesheet.scss';

import { Row } from 'react-bootstrap';

// components
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Teams from './components/Teams/Teams';

// data input
// const state = {
//   firstName: "yuqi",
//   lastName: "Liu",
//   company: "perf",
//   products: [
//     {
//       catId: 1,
//       name: "children book"
//     },
//     {
//       catId: 2,
//       name: "adult book"
//     }
//   ]
// };

const state = {
  teams: [
    {
      teamId: 1,
      teamName: 'team 1',
      teamPlayers: [
        {
          playerId: 66666,
          playerName: 'Bob',
          playerNumber: 2
        },
        {
          playerId: 77777,
          playerName: 'Tim',
          playerNumber: 3
        },
        {
          playerId: 88888,
          playerName: 'Kelvin',
          playerNumber: 4
        },
        {
          playerId: 99999,
          playerName: 'Yuqi',
          playerNumber: 5
        },
        {
          playerId: 99998,
          playerName: 'Caren',
          playerNumber: 6
        }
      ]
    },
    {
      teamId: 2,
      teamName: 'team 2',
      teamPlayers: [
        {
          playerId: 11111,
          playerName: 'Wing',
          playerNumber: 7
        },
        {
          playerId: 22222,
          playerName: 'Kobe',
          playerNumber: 8
        },
        {
          playerId: 33333,
          playerName: 'Iverson',
          playerNumber: 9
        },
        {
          playerId: 44444,
          playerName: 'Tmac',
          playerNumber: 10
        },
        {
          playerId: 55555,
          playerName: 'Curry',
          playerNumber: 11
        }
      ]
    }
  ]
};

// main
function App() {
  return (
    <Row>
      <Teams teamsData={state.teams} />
    </Row>
    //   <Header data={state}
    //
    //   <div className="mainBody">
    //     <Products productsData={state.products} />
    //     <Button />
    //   </div>
    //
    // </div>
  );
}

export default App;
