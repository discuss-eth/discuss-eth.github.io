import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ForumPage from './pages/ForumPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';


export default class PageRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/forums" component={ForumPage}/>
        <Route path="/users" component={UsersPage}/>
        <Route path="/" exact component={HomePage}/>
        <Route path="*" component={NotFoundPage}/>
      </Switch>
    );
  }
}