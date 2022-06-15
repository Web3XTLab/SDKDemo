import { Web3AppContext } from './../contexts/Web3AppContext';
import {useContext} from 'react';

export function useWeb3App()
{
    const web3app = useContext(Web3AppContext);

    return web3app;
}