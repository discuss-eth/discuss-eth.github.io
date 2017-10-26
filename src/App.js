import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ForumPage from './pages/ForumPage';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default class App extends Component {
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

        <Footer/>
      </div>
    );
  }
}
