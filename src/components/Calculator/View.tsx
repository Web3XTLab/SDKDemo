import {IButtonProps, MessageBar, MessageBarType, Spinner, SpinnerSize} from '@fluentui/react';
import {Keyboard} from './components/Keyboard';
import {Screen} from './components/Screen';
import styles from './styles.module.scss';

export interface ICalculatorViewProps
{
    loading: boolean;
    isAuthenticated: boolean | null;
    screenValue: string;
    isShowingResult: boolean;
    onKeyClickFactory: (key: string) => IButtonProps['onClick'];
}

export function CalculatorView(props: ICalculatorViewProps)
{
    const {screenValue, isShowingResult, isAuthenticated, loading, onKeyClickFactory} = props;
    return (
        <div className={styles.Calculator} >
            {
                loading
                    ? <Spinner label={'Loading...'} size={SpinnerSize.large} />
                    : isAuthenticated 
                        ? (<div className={styles.container}>
                            <div className={styles.screenWrapper}>
                                <Screen value={screenValue} isShowingResult={isShowingResult} />
                            </div>
                            <div className={styles.keyboardWrapper}>
                                <Keyboard onKeyClickFactory={onKeyClickFactory} />
                            </div>
                        </div>)
                        : <div>You need to purchase the app to continue.</div>
           }
        </div>
    );
}