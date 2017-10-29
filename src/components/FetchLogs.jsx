import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WatchWeb3Changes from './WatchWeb3Changes';
import { fetchLogs } from '../actions/logs';
import _ from 'underscore';

const WATCH_FOR_CHANGES = [ 'contractName', 'address', 'eventName', 'filterKey' ];

/**
 * This component just triggers fetching of logs with some properties and triggers additional fetches
 * if any of the parameters of the log fetching changes or the web3 context changes
 */
export default connect(
  null,
  { fetchLogs }
)(
  class FetchLogs extends Component {
    static propTypes = {
      contractName: PropTypes.string.isRequired,
      eventName: PropTypes.string.isRequired,
      filterKey: PropTypes.string,
      address: PropTypes.string,
      filter: PropTypes.object
    };

    static defaultProps = {
      filterKey: null,
      address: null
    };

    componentDidMount() {
      this.fetchLogs(this.props);
    }

    componentWillReceiveProps(nextProps) {
      const pick = o => _.pick(o, WATCH_FOR_CHANGES);

      if (!_.isEqual(pick(this.props), pick(nextProps))) {
        this.fetchLogs(nextProps);
      }
    }

    fetchLogs = ({ contractName, eventName, filterKey, filter }) => {
      this.props.fetchLogs(contractName, eventName, filter, filterKey);
    };

    render() {
      return (
        <WatchWeb3Changes handlers={[ () => this.fetchLogs(this.props) ]}/>
      );
    }
  }
);