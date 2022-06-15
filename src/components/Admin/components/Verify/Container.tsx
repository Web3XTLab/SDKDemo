import {isAuthenticated} from 'dapp-store-verify';
import {IButtonProps, ITextFieldProps} from '@fluentui/react';
import React, {useState} from 'react';
import {VerifyView} from './View';

export function Verify()
{
    const [loading, setLoading] = useState(false);
    const [appTokenId, setAppTokenId] = useState('');
    const [resultText, setResultText] = useState('');

    const onAppTokenIdChange: ITextFieldProps['onChange'] = e =>
    {
        setAppTokenId(e.currentTarget.value);
    };

    const onButtonClick: IButtonProps['onClick'] = async () =>
    {
        const appTokenIdNumber = Number.parseInt(appTokenId);
        if (Number.isNaN(appTokenIdNumber))
        {
            setResultText('Invalid app token id, please check again.');
        }
        else
        {
            setLoading(true);
            const result = await isAuthenticated(appTokenIdNumber);
            setLoading(false);
            if (result)
            {
                setResultText('The current consumer passes the authentication.');
            }
            else if(result === false)
            {
                setResultText('The current consumer does not pass the authentication.');
            }
            else
            {
                setResultText('Something goes wrong...');
            }
        }
    };


    return (
        <VerifyView
            loading={loading}
            appTokenId={appTokenId}
            resultText={resultText}
            onAppTokenIdChange={onAppTokenIdChange}
            onButtonClick={onButtonClick} />);
}