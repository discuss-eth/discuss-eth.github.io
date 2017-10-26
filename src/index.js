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

document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.web3 !== 'undefined') {
    console.log('using existing web3 provider');
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    console.log('using kovan infura, in read-only mode');
    window.web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.infura.io/0eep3H3CSiqitPXv0aOy'));
  }
  
  // https://github.com/trufflesuite/truffle-contract/issues/57
  if (typeof window.web3.currentProvider.sendAsync !== "function") {
    window.web3.currentProvider.sendAsync = function() {
      return contract.currentProvider.send.apply(
        contract.currentProvider, arguments
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
