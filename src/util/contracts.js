import RegistryJSON from 'discuss-eth-contracts/build/contracts/Registry.json';
import TruffleContract from 'truffle-contract';

export const Registry = TruffleContract(RegistryJSON);