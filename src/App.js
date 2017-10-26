import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ForumPage from './pages/ForumPage';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
        <Nav/>

        <main style={{ flexGrow: 1 }}>
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
