import {IButtonProps, ITextFieldProps, PrimaryButton, TextField} from '@fluentui/react';
import {Title} from '../Title';
import styles from './styles.module.scss';

export interface ISellViewProps
{
    loading: boolean;
    appTokenURI: string;
    amount: string;
    resultText: string;
    onAppTokenURIChange: ITextFieldProps['onChange'];
    onAmountChange: ITextFieldProps['onChange'];
    onButtonClick: IButtonProps['onClick'];
}

export function SellView(props: ISellViewProps)
{
    const {appTokenURI, loading, amount, resultText, onAppTokenURIChange, onAmountChange, onButtonClick} = props;
    return (
        <div className={styles.Sell}>
            <Title>Sell</Title>
            <div className={styles.textFieldWrapper}>
                <TextField disabled={loading} placeholder={'Enter app token URI'} value={appTokenURI} onChange={onAppTokenURIChange} />
            </div>
            <div className={styles.textFieldWrapper}>
                <TextField disabled={loading} placeholder={'Enter amount'} value={amount} onChange={onAmountChange} />
            </div>
            <div className={styles.buttonWrapper}>
                <PrimaryButton disabled={loading} className={styles.button} onClick={onButtonClick}>Sell!</PrimaryButton>
            </div>
            <div className={styles.resultText}>{resultText}</div>
        </div>);
}