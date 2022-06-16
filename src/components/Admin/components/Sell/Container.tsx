import { useWeb3App } from '@/src/hooks/useWeb3App';
import { IButtonProps, ITextFieldProps } from '@fluentui/react';
import { useState } from 'react';
import { SellView } from './View';

export function Sell()
{
    const web3app = useWeb3App();
    const [loading, setLoading] = useState(false);
    const [appTokenURI, setAppTokenURI] = useState('');
    const [price, setPrice] = useState('');
    const [resultText, setResultText] = useState('');

    const onAppTokenURIChange: ITextFieldProps['onChange'] = e =>
    {
        setAppTokenURI(e.currentTarget.value);
    };

    const onPriceChange: ITextFieldProps['onChange'] = e =>
    {
        setPrice(e.currentTarget.value);
    };

    const onButtonClick: IButtonProps['onClick'] = async () =>
    {
        const priceNumber = Number.parseInt(price);

        setLoading(true);
        const result = await web3app.sell(appTokenURI, priceNumber);
        setLoading(false);

        if (result !== undefined)
        {
            setResultText('Done');
        }
        else
        {
            setResultText('Something is wrong');
        }
    };


    return (
        <SellView
            loading={loading}
            appTokenURI={appTokenURI}
            price={price}
            resultText={resultText}
            onAmountChange={onPriceChange}
            onAppTokenURIChange={onAppTokenURIChange}
            onButtonClick={onButtonClick} />);
}