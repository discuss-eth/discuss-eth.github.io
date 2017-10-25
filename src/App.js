import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import ForumPage from './pages/ForumPage';

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
            <Route path="/forums" exact component={ForumPage}/>
            <Route path="/" exact/>
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
