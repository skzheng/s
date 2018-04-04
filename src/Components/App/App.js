import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from  'history/createBrowserHistory';

import './App.css';
import Navbar from '../Navbar/Navbar';
import Lobby from '../Lobby/Lobby';
import GameRoom from '../GameRoom/GameRoom';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Navbar />
        

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
