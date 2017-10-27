import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Loader, Segment } from 'semantic-ui-react';

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
                Discuss.eth is not deployed on the network <strong>{web3.networkType}</strong>
              </Segment>
            </Container>
          );
        }

        return <WrappedComponent {...rest}/>;
      }
    }
  );
}