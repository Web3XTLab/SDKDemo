import {IButtonProps} from '@fluentui/react';
import {Keyboard} from './components/Keyboard';
import {Screen} from './components/Screen';
import styles from './styles.module.scss';

export interface ICalculatorViewProps
{
    screenValue: string;
    isShowingResult: boolean;
    onKeyClickFactory: (key: string) => IButtonProps['onClick'];
}

export function CalculatorView(props: ICalculatorViewProps)
{
    const {screenValue, isShowingResult, onKeyClickFactory} = props;
    return (
        <div className={styles.Calculator} >
            <div className={styles.container}>
                <div className={styles.screenWrapper}>
                    <Screen value={screenValue} isShowingResult={isShowingResult} />
                </div>
                <div className={styles.keyboardWrapper}>
                    <Keyboard onKeyClickFactory={onKeyClickFactory} />
                </div>
            </div>
        </div>
    );
}