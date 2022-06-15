import {Spinner, SpinnerSize} from '@fluentui/react';
import React from 'react';
import styles from './styles.module.scss';

export function Loading()
{
    return (
        <div className={styles.Loading}>
            <Spinner label={'Loading...'} size={SpinnerSize.large} />
        </div>);
}