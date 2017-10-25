import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ForumPage from './pages/ForumPage';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>

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
