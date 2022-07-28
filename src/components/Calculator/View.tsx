import { APP_PLAN_TYPE } from '@/src/types/appTypes';
import {
    IButtonProps,
    MessageBar,
    MessageBarType,
    Spinner,
    SpinnerSize,
} from '@fluentui/react';
import { Keyboard } from './components/Keyboard';
import { Screen } from './components/Screen';
import styles from './styles.module.scss';

export interface ICalculatorViewProps {
    loading: boolean;
    verifyResult: [boolean, boolean, boolean, boolean, boolean];
    screenValue: string;
    isShowingResult: boolean;
    onKeyClickFactory: (key: string) => IButtonProps['onClick'];
}

export function CalculatorView(props: ICalculatorViewProps) {
    const {
        screenValue,
        isShowingResult,
        verifyResult,
        loading,
        onKeyClickFactory,
    } = props;
    return (
        <div className={styles.Calculator}>
            {loading ? (
                <Spinner label={'Loading...'} size={SpinnerSize.large} />
            ) : verifyResult[APP_PLAN_TYPE.BASIC] ? (
                    <div className={styles.container}>
                        {verifyResult[APP_PLAN_TYPE.BASIC] && (
                            <MessageBar messageBarType={MessageBarType.success}>
                                You have acquired basic version of the app.
                            </MessageBar>
                        )}
                        {verifyResult[APP_PLAN_TYPE.PRO] && (
                            <MessageBar messageBarType={MessageBarType.success}>
                                You have acquired pro version of the app.
                            </MessageBar>
                        )}
                        {verifyResult[APP_PLAN_TYPE.OWNERSHIP] && (
                            <MessageBar messageBarType={MessageBarType.success}>
                                You have acquired ownership of the app.
                            </MessageBar>
                        )}
                        <div className={styles.calculatorWrapper}>
                            <div className={styles.screenWrapper}>
                                <Screen
                                    value={screenValue}
                                    isShowingResult={isShowingResult}
                                />
                            </div>
                            <div className={styles.keyboardWrapper}>
                                <Keyboard
                                    onKeyClickFactory={onKeyClickFactory}
                                    isProVersion={
                                        verifyResult[APP_PLAN_TYPE.PRO]
                                    }
                                />
                            </div>
                        </div>
                    </div>
            ) : (
                <div className={styles.container}>
                    <MessageBar messageBarType={MessageBarType.error}>
                        Acquire the basic plan of the app to
                        continue.
                    </MessageBar>
                    {verifyResult[APP_PLAN_TYPE.OWNERSHIP] && (
                        <MessageBar messageBarType={MessageBarType.success}>
                            You have acquired ownership of the app.
                        </MessageBar>
                    )}
                </div>
            )}
        </div>
    );
}
