import {ITextFieldProps} from '@fluentui/react';
import React, {useState} from 'react';
import {VerifyView} from './View';

export function VerifyContainer()
{
    const [appTokenId, setAppTokenId] = useState('');

    const onAppTokenIdChange: ITextFieldProps['onChange'] = e =>
    {
        setAppTokenId(e.currentTarget.value);
    }

    

    return (<VerifyView appTokenId={appTokenId} onAppTokenIdChange={onAppTokenIdChange} />);
}