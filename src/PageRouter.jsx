import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ForumPage from './pages/ForumPage';
import requireDeployed from './util/require-deployed';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';

const DeployedForumPage = requireDeployed(ForumPage);

export default class PageRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/forums" component={DeployedForumPage}/>
        <Route path="/" exact component={HomePage}/>
        <Route path="*" component={NotFoundPage}/>
      </Switch>
    );
  }
}