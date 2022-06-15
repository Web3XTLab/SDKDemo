import React from 'react';
import {Loading} from './components/Loading';
import styles from './styles.module.scss';

export interface IWeb3AppInitFrameViewProps
{
    loading: boolean;
    children?: React.ReactNode;
}

export function Web3AppInitFrameView(props: IWeb3AppInitFrameViewProps)
{
    const {loading, children} = props;

    return (
        <div className={styles.Web3AppInitFrame}>
            {
                loading ? <Loading /> : children
            }
        </div>);
}