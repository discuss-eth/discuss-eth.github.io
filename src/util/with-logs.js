import React, { Component } from 'react';
import { connect } from 'react-redux';
import FetchLogs from '../components/FetchLogs';
import getLogKey from './get-log-key';
import { DEFAULT_LOG_STATE } from '../reducers/logs';

/**
 * Returns a function that you call on a Component to be wrapped
 * @param mapPropsToParameters map the props passed into the resulting component into an object with keys
 *  {contractName, eventName, filterKey, filter}
 * @param propName the prop used to pass the resulting log information to the wrapped component
 * @returns {Function} that is called on the comoponent to be wrapped
 */
export default function withLogs({ mapPropsToParameters, propName }) {
  return function (Wrapped) {
    return connect(
      ({ logs }) => ({ logs })
    )(
      class WithLogs extends Component {
        render() {
          const { logs, ...rest } = this.props;

          const parameters = mapPropsToParameters(rest);

          return [
            <FetchLogs key="fetcher" {...parameters}/>,
            <Wrapped
              key="wrapped"
              {...rest}
              {...{ [ propName ]: { ...DEFAULT_LOG_STATE, ...logs[ getLogKey(parameters) ] } }}
            />
          ];
        }
      }
    );
  };
}