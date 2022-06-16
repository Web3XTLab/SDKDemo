import {useRouter} from 'next/router';

export function useAppTokenId()
{
    const router = useRouter();

    return router.query.tokenId;
}