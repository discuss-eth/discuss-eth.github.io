import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Container, Icon, Menu } from 'semantic-ui-react';
import NetworkStatus from './NetworkStatus';

const MenuLink = ({ to, ...rest }) => (
  <Route path={to}>
    {
      ({ match }) => (
        <Menu.Item as={Link} to={to} active={match !== null} {...rest}/>
      )
    }
  </Route>
);


export default class Nav extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <Menu size="large" stackable>
        <Container>
          <MenuLink to="/home">Home</MenuLink>
          <MenuLink to="/forums">Forums</MenuLink>
          <MenuLink to="/users">Users</MenuLink>
          <Menu.Menu position="right">
            <Menu.Item>
              <NetworkStatus/>
            </Menu.Item>
            <Menu.Item className="item">
              <Button primary><Icon name="user"/> Select User</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}