import {Web3AppContext} from '@/src/contexts/Web3AppContext';
import Head from 'next/head';
import {Web3AppInitFrame} from '../Web3AppInitFrame';
import {AdminView} from './View';
import web3app from '../../utils/web3app';

export function Admin()
{
    return (
        <>
            <Head>
                <title>Admin Page</title>
            </Head>
            <Web3AppContext.Provider value={web3app}>
                <Web3AppInitFrame>
                    <AdminView />
                </Web3AppInitFrame>
            </Web3AppContext.Provider>
        </>
    );
}