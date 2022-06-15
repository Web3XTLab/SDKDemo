import {LinkCard} from './components/LinkCard';
import styles from './styles.module.scss';
export interface IIndexViewProps
{
    items: {title: string, url: string;}[];
}

export function IndexView(props: IIndexViewProps)
{
    const {items} = props;
    return (
        <div className={styles.Index}>
            {
                items.map(
                    ({title, url}) =>
                    (<div key={title} className={styles.linkCardWrapper}>
                        <LinkCard title={title} url={url} />
                    </div>)
                )
            }
        </div>
    );
}