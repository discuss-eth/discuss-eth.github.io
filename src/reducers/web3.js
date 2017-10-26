import { UPDATE_NETWORK_INFO } from '../actions/_types';

export default function web3Reducer(state = null, { type, payload }) {
  switch (type) {
    case UPDATE_NETWORK_INFO:
      return payload;
    default:
      return state;
  }
}