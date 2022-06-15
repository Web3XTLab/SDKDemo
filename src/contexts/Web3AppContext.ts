import React from 'react';
import web3app from '../utils/web3app';

export const Web3AppContext = React.createContext<typeof web3app>(web3app);