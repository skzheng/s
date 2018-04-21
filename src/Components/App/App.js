import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from  'history/createBrowserHistory';

import './App.css';
import Navbar from '../Navbar/Navbar';
import Lobby from '../Lobby/Lobby';
import GameRoom from '../GameRoom/GameRoom';
import Board from '../Board/Board';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Board />
        

        <Route exact path="/" render={ () => {
            return (
              <Lobby />
            )
          }}
        />

        <Route path="/game" render={({history})=> {
            return (
              <GameRoom />
            )
          }}
        />
        </div>
      </Router>
    );
  }
}

export default App;
