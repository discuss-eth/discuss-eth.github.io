import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ForumPage from './pages/ForumPage';

export default class PageRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/forums" exact component={ForumPage}/>
        <Route path="/" exact/>
      </Switch>
    );
  }
}