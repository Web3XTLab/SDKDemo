import { IButtonProps, ITextFieldProps } from '@fluentui/react';
import { useEffect, useState } from 'react';
import web3app from '../../utils/web3app';
import { BuyView } from './View';

export function Buy()
{
    const [loading, setLoading] = useState(false);
    const [appTokenId, setAppTokenId] = useState('');
    const [amount, setAmount] = useState('');
    const [resultText, setResultText] = useState('');

    useEffect(() =>
    {
        setLoading(true);
        web3app.init()
            .then(() => setLoading(false));
    }, []);

    const onAppTokenIdChange: ITextFieldProps['onChange'] = e =>
    {
        setAppTokenId(e.currentTarget.value);
    };

    const onAmountChange: ITextFieldProps['onChange'] = e =>
    {
        setAmount(e.currentTarget.value);
    };

    const onButtonClick: IButtonProps['onClick'] = async () =>
    {
        const amountNumber = Number.parseInt(amount);

        setLoading(true);
        await web3app.buy(appTokenId, amountNumber);
        setLoading(false);
    };


    return (
        <BuyView
            loading={loading}
            appTokenId={appTokenId}
            amount={amount}
            resultText={resultText}
            onAmountChange={onAmountChange}
            onAppTokenIdChange={onAppTokenIdChange}
            onButtonClick={onButtonClick} />);
}