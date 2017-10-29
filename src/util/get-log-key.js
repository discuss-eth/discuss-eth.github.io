import _ from 'underscore';

export default function getLogKey({ contractName, eventName, filterKey = null, address = null }) {
  return _.filter([
    contractName,
    address,
    eventName,
    filterKey,
  ], i => i !== null)
    .join('.');
}
