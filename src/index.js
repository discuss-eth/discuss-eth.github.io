import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Web3 from 'web3';
import { BrowserRouter } from 'react-router-dom';
import * as contracts from './util/contracts';
import _ from 'underscore';
import Promise from 'bluebird';

document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.web3 !== 'undefined') {
    console.log('using existing web3 provider');
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    console.log('using infura, in read-only mode');
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
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

  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.getElementById('root')
  );
});

registerServiceWorker();
