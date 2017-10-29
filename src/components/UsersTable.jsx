import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import _ from 'underscore';

export default class ForumTable extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  static defaultProps = {};

  render() {
    const { users } = this.props;
    console.log(users);

    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Register Date</Table.HeaderCell>
            <Table.HeaderCell>Reputation</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            _.map(
              [],
              ({ args: { administrator, newForumAddress, hashedName, name } }, ix) => (
                <Table.Row key={ix}>
                  <Table.Cell collapsing>
                    {name}
                  </Table.Cell>
                  <Table.Cell>
                    {administrator}
                  </Table.Cell>
                  <Table.Cell collapsing textAlign="right">
                    {newForumAddress}
                  </Table.Cell>
                </Table.Row>
              )
            )
          }
        </Table.Body>
      </Table>
    );
  }
}