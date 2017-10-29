import { FETCHED_LOGS_ERROR, FETCHED_LOGS_START, FETCHED_LOGS_SUCCESS, UPDATE_NETWORK_INFO } from '../actions/_types';
import getLogKey from '../util/get-log-key';

export const DEFAULT_LOG_STATE = {
  logs: [],
  error: null,
  loading: true
};

export default function logsReducer(state = {}, { type, payload, meta }) {
  switch (type) {
    // when the network or accounts update, reset all logs state
    case UPDATE_NETWORK_INFO: {
      return {};
    }

    case FETCHED_LOGS_START: {
      const stateKey = getLogKey(meta);

      return {
        ...state,
        [ stateKey ]: {
          logs: [],
          ...state[ stateKey ],
          error: null,
          loading: true
        }
      };
    }

    case FETCHED_LOGS_SUCCESS: {
      const stateKey = getLogKey(meta);

      return {
        ...state,
        [ stateKey ]: {
          error: null,
          loading: false,
          logs: payload
        }
      };
    }

    case FETCHED_LOGS_ERROR: {
      const stateKey = getLogKey(meta);

      return {
        ...state,
        [ stateKey ]: {
          error: payload,
          loading: false,
          logs: []
        }
      };
    }

    default:
      return state;
  }
}