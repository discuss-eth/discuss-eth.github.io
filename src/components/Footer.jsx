import React, { Component } from 'react';
import { Container, Grid, Header, Image, List, Segment } from 'semantic-ui-react';

export default class Footer extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About"/>
                <List link inverted>
                  <List.Item as="a" href="https://github.com/discuss-eth/discuss-eth.github.io">GitHub</List.Item>
                  <List.Item as="a" href="mailto:moody.salem+discuss-eth@gmail.com">Contact Us</List.Item>
                  <List.Item as="a" href="https://travis-ci.org/discuss-eth/discuss-eth.github.io">
                    <Image src="https://travis-ci.org/discuss-eth/discuss-eth.github.io.svg?branch=src"/>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>Discuss.eth</Header>
                <p>Discuss.eth is a decentralized forum built on Ethereum</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}