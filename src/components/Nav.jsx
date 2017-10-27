import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Container, Icon, Menu, Modal } from 'semantic-ui-react';
import Stateless from 'react-web3-network-status/stateless';
import { connect } from 'react-redux';

const MenuLink = ({ to, ...rest }) => (
  <Route path={to}>
    {
      ({ match }) => (
        <Menu.Item as={Link} to={to} active={match !== null} {...rest}/>
      )
    }
  </Route>
);

const SelectUser = connect(
  ({ web3 }) => ({ web3 })
)(
  class SelectUser extends Component {
    state = {
      open: false
    };

    openModal = () => this.setState({ open: true });
    closeModal = () => this.setState({ open: false });

    render() {
      const { web3 } = this.props;
      const { open } = this.state;

      return (
        <Menu.Item className="item">
          <Button
            primary
            disabled={web3 === null || web3.accounts === null || web3.accounts.length === 0 || !web3.isDeployed}
            onClick={this.openModal}>
            <Icon name="user"/> Select User
          </Button>

          <Modal dimmer="blurring" open={open} onClose={this.closeModal}>
            <Modal.Header>Select User</Modal.Header>
            <Modal.Content>
              hello world
            </Modal.Content>
            <Modal.Actions>
              <Button>Select User</Button>
            </Modal.Actions>
          </Modal>
        </Menu.Item>
      );
    }
  }
);

const NetworkStatus = connect(
  ({ web3 }) => ({ web3 })
)(
  class NetworkStatus extends Component {
    render() {
      const { web3 } = this.props;
      if (web3 === null) {
        return null;
      }

      return (
        <Menu.Item>
          <Stateless networkId={web3.networkId}/>
        </Menu.Item>
      );
    }
  }
);

export default class Nav extends Component {
  render() {
    return (
      <Menu size="large" stackable style={{ height: 52 }}>
        <Container>
          <MenuLink to="/home">Home</MenuLink>
          <MenuLink to="/forums">Forums</MenuLink>
          <MenuLink to="/users">Users</MenuLink>
          <Menu.Menu position="right">
            <NetworkStatus/>
            <SelectUser/>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}