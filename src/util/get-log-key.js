export default function getLogKey({ contractName, eventName, filterKey = null }) {
  return `${contractName}.${eventName}${filterKey !== null ? `.${filterKey}` : ''}`;
}
