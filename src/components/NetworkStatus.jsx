import React, { Component } from 'react';
import Stateless from 'react-web3-network-status/stateless';
import { connect } from 'react-redux';

export default connect(
  ({ web3 }) => ({ web3 })
)(
  class NetworkStatus extends Component {
    render() {
      const { web3 } = this.props;
      if (web3 === null) {
        return null;
      }

      return (
        <Stateless networkId={web3.networkId}/>
      );
    }
  }
);