import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'underscore';

export default connect(
  ({ web3 }) => ({ web3 })
)(
  class WatchWeb3Changes extends Component {
    static propTypes = {
      web3: PropTypes.shape({
        accounts: PropTypes.arrayOf(PropTypes.string).isRequired,
        networkId: PropTypes.number.isRequired
      }),
      handlers: PropTypes.arrayOf(PropTypes.func).isRequired,
      watchKeys: PropTypes.arrayOf(PropTypes.oneOf([ 'accounts', 'networkId', 'isDeployed' ]))
    };

    static defaultProps = {
      watchKeys: [ 'accounts', 'networkId', 'isDeployed' ]
    };

    componentDidMount() {
      const { handlers, web3 } = this.props;

      if (web3 === null) {
        return;
      }

      _.each(
        handlers,
        func => func()
      );
    }

    componentWillReceiveProps({ watchKeys, web3, handlers }) {
      if (web3 === null) {
        return;
      }

      const pluckWatchKeys = obj => _.pick(obj, watchKeys);

      if (!_.isEqual(pluckWatchKeys(web3), pluckWatchKeys(this.props.web3))) {
        _.each(
          handlers,
          func => func()
        );
      }
    }

    render() {
      return null;
    }
  }
);