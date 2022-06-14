import React from 'react';
import styles from './styles.module.scss';
import {ITextFieldProps, Label, TextField} from '@fluentui/react';

export interface IVerifyViewProps
{
    appTokenId: string;
    onAppTokenIdChange: ITextFieldProps['onChange'];
}

export function VerifyView(props: IVerifyViewProps)
{
    const {appTokenId, onAppTokenIdChange} = props;
    return (
        <div className={styles.Verify}>
            <Label>
                Verify Authentication
            </Label>
            <TextField label={'App Token Id'} value={appTokenId} onChange={onAppTokenIdChange} />
        </div>);
}