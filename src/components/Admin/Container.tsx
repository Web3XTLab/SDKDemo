import Head from 'next/head';
import {AdminView} from './View';

export function Admin()
{
    return (
        <>
            <Head>
                <title>Admin Page</title>
            </Head>
           <AdminView/>
        </>
    );
}