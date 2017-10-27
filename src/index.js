import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Web3 from 'web3';
import * as contracts from './util/contracts';
import _ from 'underscore';
import Promise from 'bluebird';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './util/configure-store';
import { startPolling } from './actions/web3';
import { Provider } from 'react-redux';
import ZeroClientProvider from 'web3-provider-engine/zero.js';

document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.web3 !== 'undefined') {
    console.log('using existing web3 provider');
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    console.log('using kovan infura, in read-only mode');
    window.web3 = new Web3(
      ZeroClientProvider({
        static: {
          eth_syncing: false,
          web3_clientVersion: 'ZeroClientProvider',
        },
        pollingInterval: 99999999, // not interested in polling for new blocks
        rpcUrl: 'https://kovan.infura.io/0eep3H3CSiqitPXv0aOy',
        // account mgmt
        getAccounts: (cb) => cb(null, [])
      })
    );
  }
  
  // https://github.com/trufflesuite/truffle-contract/issues/57
  if (typeof window.web3.currentProvider.sendAsync !== "function") {
    window.web3.currentProvider.sendAsync = function () {
      return window.web3.currentProvider.send.apply(
        window.web3.currentProvider, arguments
      );
    };
  }

  _.each(
    contracts,
    contract => {
      contract.setProvider(window.web3.currentProvider);
    }
  );

  _.each(
    [ 'eth' ],
    key => Promise.promisifyAll(window.web3[ key ])
  );
  
  const store = configureStore();
  store.dispatch(startPolling());

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
});

registerServiceWorker();
