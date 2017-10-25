import React, { Component } from 'react';

export default function withAccounts(WrappedComponent) {
  return class WithAccounts extends Component {
    state = {
      accounts: null,
      promise: null
    };

    _interval = null;

    componentDidMount() {
      this.getAccounts();

      this._interval = setInterval(this.getAccounts, 1000);
    }

    getAccounts = async () => {
      const { promise } = this.state;

      if (promise !== null) {
        return;
      }

      const getAccounts = window.web3.eth.getAccountsAsync();
      this.setState({ promise: getAccounts });

      const accounts = await getAccounts;
      this.setState({ accounts, promise: null });

      return accounts;
    };

    componentWillUnmount() {
      clearInterval(this._interval);
    }

    render() {
      const { accounts } = this.state;

      if (accounts === null) {
        return null;
      }

      if (accounts.length === 0) {
        return <div>unlock your metamask</div>;
      }

      return <WrappedComponent accounts={accounts}/>;
    }
  };
}