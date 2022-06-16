import {calculate} from '@/src/utils/calculate';
import {useState} from 'react';
import {CalculatorView, ICalculatorViewProps} from './View';

export function Calculator()
{
    const [screenValue, setScreenValue] = useState('0');
    const [formula, setFormula] = useState('0');

    const [isShowingResult, setIsShowingResult] = useState(true);

    const reset = () =>
    {
        setScreenValue('0');
        setFormula('0');
        setIsShowingResult(true);
    };

    const onKeyClickFactory: ICalculatorViewProps['onKeyClickFactory'] = key =>
    {
        return () =>
        {
            if (key === '*')
            {
                setScreenValue(screenValue + '×');
                setFormula(formula + key);
                setIsShowingResult(false);
            }
            else if (key === '/')
            {
                setScreenValue(screenValue + '÷');
                setFormula(formula + key);
                setIsShowingResult(false);
            }
            else if (key === '+' || key === '-')
            {
                setScreenValue(screenValue + key);
                setFormula(formula + key);
                setIsShowingResult(false);
            }
            else if (key === '=')
            {
                const result = calculate(formula).toString();
                setScreenValue(result);
                setFormula(result);
                setIsShowingResult(true);
            }
            else if (key === 'C')
            {
                reset();
            }
            else
            {
                if (isShowingResult)
                {
                    setScreenValue(key);
                    setFormula(key);
                }
                else
                {
                    setScreenValue(screenValue + key);
                    setFormula(formula + key);
                }
                setIsShowingResult(false);
            }
        };
    };

    return (<CalculatorView screenValue={screenValue} isShowingResult={isShowingResult} onKeyClickFactory={onKeyClickFactory} />);
}