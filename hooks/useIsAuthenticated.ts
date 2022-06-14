import {useEffect, useState} from 'react';
import {isAuthenticated} from '@/lib/dapp-store-verify';

export function useIsAuthenticated(appTokenId)
{
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState<boolean | undefined>(undefined);
    const [error, setError] = useState(null);

    useEffect(() =>
    {
        setLoading(true);
        isAuthenticated(appTokenId)
            .then(result => setResult(result))
            .catch(e => setError(e))
            .finally(() => setLoading(false));
    }, [appTokenId]);

    return {
        loading,
        result,
        error
    };
}