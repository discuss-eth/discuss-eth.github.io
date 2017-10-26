import { UPDATE_NETWORK_INFO } from './_types';
import _ from 'underscore';

function getWeb3Info() {
  return Promise.all([
    window.web3.eth.getAccounts(),
    window.web3.eth.net.getNetworkType(),
    window.web3.eth.net.getId()
  ]).then(
    ([ accounts, networkType, networkId ]) => ({
      accounts,
      networkType,
      networkId
    })
  );
}

export function startPolling() {
  return (dispatch, getState) => {
    function intervalFunction() {
      getWeb3Info()
        .then(
          web3Info => {
            if (!_.isEqual(web3Info, getState().web3)) {
              dispatch({ type: UPDATE_NETWORK_INFO, payload: web3Info });
            }
          }
        );
    }

    setInterval(intervalFunction, 1000);
  };
}

