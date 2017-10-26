import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'underscore';

export default connect(
  ({ web3 }) => ({ web3 })
)(
  class TriggerOnChange extends Component {
    static propTypes = {
      web3: PropTypes.shape({
        accounts: PropTypes.arrayOf(PropTypes.string).isRequired,
        networkId: PropTypes.number.isRequired,
        networkType: PropTypes.string.isRequired
      }),
      functions: PropTypes.arrayOf(PropTypes.func).isRequired,
      watchKeys: PropTypes.arrayOf(PropTypes.oneOf([ 'accounts', 'networkId', 'networkType' ]))
    };

    static defaultProps = {
      watchKeys: [ 'accounts', 'networkId', 'networkType' ]
    };

    componentDidMount() {
      const { functions, web3 } = this.props;

      if (web3 === null) {
        return;
      }

      _.each(
        functions,
        func => func()
      );
    }

    componentWillReceiveProps({ watchKeys, web3, functions }) {
      if (web3 === null) {
        return;
      }

      const pluck = obj => _.pick(obj, watchKeys);

      if (!_.isEqual(pluck(web3), pluck(this.props.web3))) {
        _.each(
          functions,
          func => func()
        );
      }
    }

    render() {
      return null;
    }
  }
);