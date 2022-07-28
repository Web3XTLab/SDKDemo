import { verify } from 'dapp-store-verify';
import { useEffect, useMemo, useState } from 'react';
import { useAppTokenId } from './useAppTokenId';

export function useVerify() {
    const appTokenId = useAppTokenId();

    const defaultResult: Awaited<ReturnType<typeof verify>> = useMemo(
        () => [false, false, false, false, false],
        []
    );

    const [loading, setLoading] = useState(true);
    const [result, setResult] =
        useState<Awaited<ReturnType<typeof verify>>>(defaultResult);

    useEffect(() => {
        setLoading(true);
        const tokenId = Array.isArray(appTokenId) ? appTokenId[0] : appTokenId;
        if (typeof tokenId === 'string') {
            verify(tokenId)
                .then((result) => {
                    setResult(result);
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
            setResult(defaultResult);
        }
    }, [appTokenId, defaultResult]);

    return { loading, result };
}
