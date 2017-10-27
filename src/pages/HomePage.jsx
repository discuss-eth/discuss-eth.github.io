import React, { Component } from 'react';
import { Container, Item } from 'semantic-ui-react';

export default class HomePage extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <Container>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' src='/assets/images/wireframe/image.png'/>

            <Item.Content>
              <Item.Header as='a'>Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                <p>
                  Many people also have their own barometers for what makes a cute dog.
                </p>
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src='/assets/images/wireframe/image.png'/>

            <Item.Content>
              <Item.Header as='a'>Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                <p>
                  Many people also have their own barometers for what makes a cute dog.
                </p>
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    );
  }
}