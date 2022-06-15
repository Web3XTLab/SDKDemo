import {useWeb3App} from '@/src/hooks/useWeb3App';
import {IButtonProps, ITextFieldProps} from '@fluentui/react';
import {useState} from 'react';
import {BuyView} from './View';

export function Buy()
{
    const web3app = useWeb3App();

    const [loading, setLoading] = useState(false);
    const [appTokenId, setAppTokenId] = useState('');
    const [amount, setAmount] = useState('');
    const [resultText, setResultText] = useState('');

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