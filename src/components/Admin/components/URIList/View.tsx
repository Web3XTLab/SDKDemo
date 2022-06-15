import {ConstrainMode, DetailsList, IButtonProps, IColumn, PrimaryButton, SelectionMode} from '@fluentui/react';
import React from 'react';
import {Title} from '../Title';
import styles from './styles.module.scss';

export interface IURIListViewProps
{
    list: string[];
    onReloadButtonClick: IButtonProps['onClick'];
}

export function URIListView(props: IURIListViewProps)
{
    const {list, onReloadButtonClick} = props;

    const columns: IColumn[] = [
        {
            key: 'tokenId',
            fieldName: 'tokenId',
            name: 'Token ID',
            minWidth: 0,
            maxWidth: 75,
        },
        {
            key: 'uri',
            fieldName: 'uri',
            name: 'URI',
            minWidth: 0,
            isMultiline: true,
        }
    ];

    const items = list.map((item, i) => ({
        key: i,
        tokenId: i,
        uri: item
    }));

    return (
        <div className={styles.URIList}>
            <div className={styles.titleWrapper}>
                <Title>Token ID List</Title>
                <PrimaryButton onClick={onReloadButtonClick}>Reload</PrimaryButton>
            </div>
            <div className={styles.jsonWrapper}>
                <DetailsList selectionMode={SelectionMode.none} items={items} columns={columns} />
            </div>
        </div>);
}