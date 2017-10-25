import React, { Component } from 'react';
import { Registry } from '../util/contracts';
import withAccounts from '../util/withAccounts';
import PropTypes from 'prop-types';
import _ from 'underscore';
import CreateForumForm from '../components/CreateForumForm';
import { Container } from 'semantic-ui-react';

export default withAccounts(
  class ForumPage extends Component {
    static propTypes = {
      accounts: PropTypes.arrayOf(PropTypes.string).isRequired
    };

    state = {
      forumLogs: [],
      formValue: {}
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
      const { formValue: { name, reputationThreshold } } = this.state;

      const registry = await Registry.deployed();

      const registration = await registry.registerForum(name, reputationThreshold, { from: this.props.accounts[ 0 ] });

      console.log(registration);
    };


    setFormValue = formValue => this.setState({ formValue });

    render() {
      return (
        <Container>
          <CreateForumForm onSubmit={this.handleSubmit} onChange={this.setFormValue}/>

          <ul>
            {
              _.map(
                this.state.forumLogs,
                ({ args: { administrator, newForumAddress, hashedName, name } }, ix) => (
                  <li key={ix}>
                    {administrator} - {newForumAddress} - {hashedName} - {name}
                  </li>
                )
              )
            }
          </ul>
        </Container>
      );
    }
  }
);