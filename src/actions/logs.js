import { FETCHED_LOGS_ERROR, FETCHED_LOGS_START, FETCHED_LOGS_SUCCESS } from './_types';
import { Forum, Registry } from '../util/contracts';

const CONTRACTS = {
  Registry,
  Forum
};

export function fetchLogs(contractName, eventName, address = null, filters = {}, filterKey = null) {
  return async (dispatch, getState) => {
    const { web3: { networkId } } = getState();

    const meta = { contractName, eventName, address, filterKey };

    const AbstractContract = CONTRACTS[ contractName ];
    AbstractContract.setNetwork(networkId);

    // get the contract instance
    let contract;
    try {
      if (address === null) {
        contract = await CONTRACTS[ contractName ].deployed();
      } else {
        contract = await CONTRACTS[ contractName ].at(address);
      }
    } catch (error) {
      // the contract is not deployed
      dispatch({
        type: FETCHED_LOGS_ERROR,
        payload: error.message,
        error: true,
        meta
      });

      return;
    }

    dispatch({
      type: FETCHED_LOGS_START,
      meta
    });

    // get the filter for the event
    const filter = contract[ eventName ](filters, { fromBlock: 0 });

    filter.get(
      (error, logs) => {
        if (error) {
          dispatch({
            type: FETCHED_LOGS_ERROR,
            payload: error,
            error: true,
            meta
          });
        } else {
          dispatch({
            type: FETCHED_LOGS_SUCCESS,
            payload: logs,
            meta
          });
        }
      }
    );
  };
}