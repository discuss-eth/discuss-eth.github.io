import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ForumPage from './pages/ForumPage';
import requireDeployed from './util/require-deployed';

const DeployedForumPage = requireDeployed(ForumPage);

export default class PageRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/forums" exact component={DeployedForumPage}/>
        <Route path="/" exact/>
      </Switch>
    );
  }
}