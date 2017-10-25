import React, { Component } from 'react';
import { Registry } from '../util/contracts';
import withAccounts from '../util/withAccounts';
import PropTypes from 'prop-types';
import _ from 'underscore';

export default withAccounts(
  class ForumPage extends Component {
    static propTypes = {
      accounts: PropTypes.arrayOf(PropTypes.string).isRequired
    };

    state = {
      forumLogs: []
    };

    async componentDidMount() {
      const registry = await Registry.deployed();

      this._filter = registry.LogRegisterForum({}, { fromBlock: 0 });

      this._filter.watch((err, forumLog) => {
        this.setState(({ forumLogs }) => ({ forumLogs: [ ...forumLogs, forumLog ] }));
      });
    }

    handleSubmit = async e => {
      e.preventDefault();
      const { name: { value: name }, reputationThreshold: { value: reputationThreshold } } = this.refs;

      const registry = await Registry.deployed();

      const registration = await registry.registerForum(name, reputationThreshold, { from: this.props.accounts[ 0 ] });

      console.log(registration);
    };


    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="name" ref="name"/>
            <input type="number" placeholder="reputationThreshold" ref="reputationThreshold"/>
            <button type="submit">Create forum</button>
          </form>

          <ul>
            {
              _.map(
                this.state.forumLogs,
                ({ args: { administrator, newForumAddress, hashedName, name } }) => (
                  <li>
                    {administrator} - {newForumAddress} - {hashedName} - {name}
                  </li>
                )
              )
            }
          </ul>
        </div>
      );
    }
  }
);