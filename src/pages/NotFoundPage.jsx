import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

export default class NotFoundPage extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <Container>
        <Header size="huge">
          <Header.Content>
            404
          </Header.Content>
        </Header>
        <p>
          Sorry, the page you are looking for was not found!
        </p>
      </Container>
    );
  }
}