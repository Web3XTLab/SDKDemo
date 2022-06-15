import {DocumentCard, DocumentCardDetails} from '@fluentui/react';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

export interface ILinkCardProps
{
    title: string,
    url: string,
}

export function LinkCard(props: ILinkCardProps)
{
    const {title, url} = props;
    return (
        <Link href={url}>
            <div className={styles.LinkCard}>
                <span className={styles.titleWrapper}>
                    {title}
                </span>
            </div>
        </Link>
    );
}