import RegistryJSON from 'discuss-eth-contracts/build/contracts/Registry.json';
import ForumJSON from 'discuss-eth-contracts/build/contracts/Forum.json';
import TruffleContract from 'truffle-contract';

export const Registry = TruffleContract(RegistryJSON);
export const Forum = TruffleContract(ForumJSON);