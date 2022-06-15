import {useWeb3App} from '@/src/hooks/useWeb3App';
import {useEffect, useState} from 'react';
import {Web3AppInitFrameView} from './View';

export interface IWeb3AppInitFrameProps
{
    children?: React.ReactNode;
}

export function Web3AppInitFrame(props: IWeb3AppInitFrameProps)
{
    const {children} = props;
    const [loading, setLoading] = useState(true);
    const web3app = useWeb3App();

    useEffect(() =>
    {
        setLoading(true);
        web3app.init()
            .then(() => setLoading(false));
    }, [web3app]);

    return (<Web3AppInitFrameView loading={loading}>{children}</Web3AppInitFrameView>);
}