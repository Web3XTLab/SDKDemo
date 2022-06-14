import {IButtonProps, ITextFieldProps, PrimaryButton, TextField} from '@fluentui/react';
import {Title} from '../Title';
import styles from './styles.module.scss';

export interface IBuyViewProps
{
    loading: boolean;
    appTokenId: string;
    amount: string;
    resultText: string;
    onAppTokenIdChange: ITextFieldProps['onChange'];
    onAmountChange: ITextFieldProps['onChange'];
    onButtonClick: IButtonProps['onClick'];
}

export function BuyView(props: IBuyViewProps)
{
    const {appTokenId, loading, amount, resultText, onAppTokenIdChange: onAppTokenURIChange, onAmountChange, onButtonClick} = props;
    return (
        <div className={styles.Buy}>
            <Title>Buy</Title>
            <div className={styles.textFieldWrapper}>
                <TextField disabled={loading} placeholder={'Enter app token id'} value={appTokenId} onChange={onAppTokenURIChange} />
            </div>
            <div className={styles.textFieldWrapper}>
                <TextField disabled={loading} placeholder={'Enter amount'} value={amount} onChange={onAmountChange} />
            </div>
            <div className={styles.buttonWrapper}>
                <PrimaryButton disabled={loading} className={styles.button} onClick={onButtonClick}>Buy!</PrimaryButton>
            </div>
            <div className={styles.resultText}>{resultText}</div>
        </div>);
}