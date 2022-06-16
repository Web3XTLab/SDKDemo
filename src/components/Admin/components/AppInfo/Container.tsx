import {useWeb3App} from '@/src/hooks/useWeb3App';
import {IButtonProps, ITextFieldProps} from '@fluentui/react';
import React, {useState} from 'react';
import {IAppInfo} from './IAppInfo';
import {AppInfoView} from './View';

export function AppInfo()
{
    const [loading, setLoading] = useState(false);
    const [appTokenId, setAppTokenId] = useState('');
    const [appInfo, setAppInfo] = useState<IAppInfo | null>(null);
    const web3app = useWeb3App();

    const onAppTokenIdChange: ITextFieldProps['onChange'] = e =>
    {
        setAppTokenId(e.currentTarget.value);
    };

    const onButtonClick: IButtonProps['onClick'] = async () =>
    {
        setLoading(true);
        const appInfo: IAppInfo = await web3app.getAppInfo(appTokenId);
        setAppInfo(appInfo);
        setLoading(false);
    };


    return (
        <AppInfoView
            loading={loading}
            appTokenId={appTokenId}
            appInfo={appInfo}
            onAppTokenIdChange={onAppTokenIdChange}
            onButtonClick={onButtonClick} />);
}