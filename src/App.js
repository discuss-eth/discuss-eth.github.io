import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ForumPage from './pages/ForumPage';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}
