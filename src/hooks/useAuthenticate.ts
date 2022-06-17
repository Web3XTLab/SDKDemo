import {useState, useEffect} from 'react';
import {isAuthenticated} from 'dapp-store-verify';
import {useAppTokenId} from './useAppTokenId';

export function useAuthenticate()
{
    const appTokenId = useAppTokenId();

    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);

    useEffect(() =>
    {
        setLoading(true);
        if (Array.isArray(appTokenId))
        {
            isAuthenticated(appTokenId[0])
                .then(result =>
                {
                    setResult(result);
                })
                .finally(() => setLoading(false));
        }
        else if (typeof appTokenId === 'string')
        {
            isAuthenticated(appTokenId)
                .then(result =>
                {
                    setResult(result);
                })
                .finally(() => setLoading(false));
        }
        else
        {
            setLoading(false);
            setResult(false);
        }

    }, [appTokenId]);

    return {loading, result};
}