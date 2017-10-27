import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'semantic-ui-react';
import _ from 'underscore';
import { Link } from 'react-router-dom';

export default class ForumTable extends Component {
  static propTypes = {
    forums: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  static defaultProps = {};

  render() {
    const { forums } = this.props;

    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Administrator</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            _.map(
              forums,
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

          <Table.Row key="add">
            <Table.Cell textAlign="center" colSpan={3}>
              <Button positive as={Link} to="/forums/create">Create forum</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}