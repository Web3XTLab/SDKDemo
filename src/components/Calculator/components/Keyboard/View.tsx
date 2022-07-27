import React, { useMemo } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { DefaultButton, IButtonProps, PrimaryButton } from '@fluentui/react';

export interface IKeyboardProps {
    onKeyClickFactory: (key: string) => IButtonProps['onClick'];
    isProVersion: boolean;
}

export function Keyboard(props: IKeyboardProps) {
    const { isProVersion, onKeyClickFactory } = props;
    const array = useMemo(() => new Array(10).fill(0), []);

    return (
        <div className={styles.Keyboard}>
            {array.map((_, i) => (
                <div
                    key={i}
                    className={classnames(styles[`key-${i}`], styles.key)}
                >
                    <DefaultButton
                        className={styles.button}
                        onClick={onKeyClickFactory(i.toString())}
                    >
                        <div className={styles.keyText}>{i}</div>
                    </DefaultButton>
                </div>
            ))}
            <div className={classnames(styles[`key-C`], styles.key)}>
                <PrimaryButton
                    className={styles.button}
                    onClick={onKeyClickFactory('C')}
                >
                    <div className={styles.keyText}>C</div>
                </PrimaryButton>
            </div>
            <div className={classnames(styles[`key-.`], styles.key)}>
                <DefaultButton
                    className={styles.button}
                    onClick={onKeyClickFactory('.')}
                    disabled={!isProVersion}
                >
                    <div className={styles.keyText}>.</div>
                </DefaultButton>
            </div>
            <div
                className={classnames(
                    styles[`key-+`],
                    styles.key,
                    styles.operatorKey
                )}
            >
                <DefaultButton
                    className={styles.button}
                    onClick={onKeyClickFactory('+')}
                >
                    <div className={styles.keyText}>+</div>
                </DefaultButton>
            </div>
            <div
                className={classnames(
                    styles[`key--`],
                    styles.key,
                    styles.operatorKey
                )}
            >
                <DefaultButton
                    className={styles.button}
                    onClick={onKeyClickFactory('-')}
                >
                    <div className={styles.keyText}>-</div>
                </DefaultButton>
            </div>
            <div
                className={classnames(
                    styles[`key-x`],
                    styles.key,
                    styles.operatorKey
                )}
            >
                <DefaultButton
                    className={styles.button}
                    onClick={onKeyClickFactory('*')}
                    disabled={!isProVersion}
                >
                    <div className={styles.keyText}>×</div>
                </DefaultButton>
            </div>
            <div
                className={classnames(
                    styles[`key-/`],
                    styles.key,
                    styles.operatorKey
                )}
            >
                <DefaultButton
                    className={styles.button}
                    onClick={onKeyClickFactory('/')}
                    disabled={!isProVersion}
                >
                    <div className={styles.keyText}>÷</div>
                </DefaultButton>
            </div>
            <div
                className={classnames(
                    styles[`key-=`],
                    styles.key,
                    styles.operatorKey
                )}
            >
                <PrimaryButton
                    className={styles.button}
                    onClick={onKeyClickFactory('=')}
                >
                    <div className={styles.keyText}>=</div>
                </PrimaryButton>
            </div>
        </div>
    );
}
