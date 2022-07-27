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
                    <div className={styles.screenWrapper}>
                        <Screen
                            value={screenValue}
                            isShowingResult={isShowingResult}
                        />
                    </div>
                    <div className={styles.keyboardWrapper}>
                        <Keyboard
                            onKeyClickFactory={onKeyClickFactory}
                            isProVersion={verifyResult[APP_PLAN_TYPE.PRO]}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    You need to acquire the basic plan of the app to continue.
                </div>
            )}
        </div>
    );
}
