import {IButtonProps} from '@fluentui/react';
import {Keyboard} from './components/Keyboard';
import {Screen} from './components/Screen';
import styles from './styles.module.scss';

export interface ICalculatorViewProps
{
    screenValue: string;
    onKeyClickFactory: (key: string) => IButtonProps['onClick'];
}

export function CalculatorView(props: ICalculatorViewProps)
{
    const {screenValue, onKeyClickFactory} = props;
    return (
        <div className={styles.Calculator} >
            <div className={styles.container}>
                <div className={styles.screenWrapper}>
                    <Screen value={screenValue} />
                </div>
                <div className={styles.keyboardWrapper}>
                    <Keyboard onKeyClickFactory={onKeyClickFactory} />
                </div>
            </div>
        </div>
    );
}