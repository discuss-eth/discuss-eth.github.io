import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Loader, Segment } from 'semantic-ui-react';
import Stateless from 'react-web3-network-status/stateless';

export default function RequireDeployed(WrappedComponent) {
  return connect(
    ({ web3 }) => ({ web3 })
  )(
    class RequiresDeployed extends Component {
      render() {
        const { web3, ...rest } = this.props;

        if (web3 === null) {
          return <Loader active inline="centered"/>;
        }

        if (!web3.isDeployed) {
          return (
            <Container>
              <Segment padded color="red">
                <span style={{ marginRight: 16 }}>
                  <Stateless networkId={web3.networkId}/>
                </span>
                <strong>Discuss.eth</strong> is not deployed on the network
              </Segment>
            </Container>
          );
        }

        return <WrappedComponent {...rest}/>;
      }
    }
  );
}