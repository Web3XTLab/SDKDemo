import {useWeb3App} from '@/src/hooks/useWeb3App';
import {IButtonProps, ITextFieldProps} from '@fluentui/react';
import {useState} from 'react';
import {BuyView} from './View';

export function Buy()
{
    const web3app = useWeb3App();

    const [loading, setLoading] = useState(false);
    const [appTokenId, setAppTokenId] = useState('');
    const [price, setPrice] = useState('');
    const [resultText, setResultText] = useState('');

    const onAppTokenIdChange: ITextFieldProps['onChange'] = e =>
    {
        setAppTokenId(e.currentTarget.value);
    };

    const onPriceChange: ITextFieldProps['onChange'] = e =>
    {
        setPrice(e.currentTarget.value);
    };

    const onButtonClick: IButtonProps['onClick'] = async () =>
    {
        setResultText('');
        const priceNumber = Number.parseInt(price);

        setLoading(true);
        const result = await web3app.buy(appTokenId, priceNumber);
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
        <BuyView
            loading={loading}
            appTokenId={appTokenId}
            price={price}
            resultText={resultText}
            onPriceChange={onPriceChange}
            onAppTokenIdChange={onAppTokenIdChange}
            onButtonClick={onButtonClick} />);
}