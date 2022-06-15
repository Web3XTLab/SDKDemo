import {useWeb3App} from '@/src/hooks/useWeb3App';
import React, {useEffect, useState} from 'react';
import {IURIListViewProps, URIListView} from './View';

export function URIList()
{
    const [list, setList] = useState([]);
    const web3app = useWeb3App();

    useEffect(() =>
    {
        web3app.tokenURIs()
            .then(result => setList(result ?? []));
    }, [web3app]);

    const onReloadButtonClick: IURIListViewProps['onReloadButtonClick'] = async () =>
    {
        const result = await web3app.tokenURIs();
        setList(result);
    };

    return (<URIListView list={list} onReloadButtonClick={onReloadButtonClick} />);
}