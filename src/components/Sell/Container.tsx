import {isAuthenticated} from '@/lib/dapp-store-verify';
import {IButtonProps, ITextFieldProps} from '@fluentui/react';
import {useEffect, useState} from 'react';
import {SellView} from './View';
import web3app from '../../utils/web3app';

export function Sell()
{
    const [loading, setLoading] = useState(false);
    const [appTokenURI, setAppTokenURI] = useState('');
    const [amount, setAmount] = useState('');
    const [resultText, setResultText] = useState('');

    useEffect(() =>
    {
        setLoading(true);
        web3app.init()
            .then(() => setLoading(false));
    }, []);

    const onAppTokenURIChange: ITextFieldProps['onChange'] = e =>
    {
        setAppTokenURI(e.currentTarget.value);
    };

    const onAmountChange: ITextFieldProps['onChange'] = e =>
    {
        setAmount(e.currentTarget.value);
    };

    const onButtonClick: IButtonProps['onClick'] = async () =>
    {
        const amountNumber = Number.parseInt(amount);

        setLoading(true);
        await web3app.sell(appTokenURI, amountNumber);
        setLoading(false);
    };


    return (
        <SellView
            loading={loading}
            appTokenURI={appTokenURI}
            amount={amount}
            resultText={resultText}
            onAmountChange={onAmountChange}
            onAppTokenURIChange={onAppTokenURIChange}
            onButtonClick={onButtonClick} />);
}