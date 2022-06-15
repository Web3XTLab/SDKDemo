import {useWeb3App} from '@/src/hooks/useWeb3App';
import {IButtonProps, ITextFieldProps} from '@fluentui/react';
import {useState} from 'react';
import {SellView} from './View';

export function Sell()
{
    const web3app = useWeb3App();
    const [loading, setLoading] = useState(false);
    const [appTokenURI, setAppTokenURI] = useState('');
    const [amount, setAmount] = useState('');
    const [resultText, setResultText] = useState('');

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