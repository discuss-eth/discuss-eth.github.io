import React, { Component } from 'react';
import './App.css';
import { Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/forums">
                Forums
              </Link>
            </li>
            <li>
              <Link to="/threads">
                Threads
              </Link>
            </li>
            <li>
              <Link to="/users">
                Users
              </Link>
            </li>
          </ul>
        </header>

        <main>
          <Switch>

          </Switch>
        </main>

        <footer>
          <span>
            <a href="https://github.com/discuss-eth/discuss-eth-webapp">discuss.eth</a>
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
