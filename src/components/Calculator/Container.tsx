import { useVerify } from '@/src/hooks/useVerify';
import { calculate } from '@/src/utils/calculate';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { CalculatorView, ICalculatorViewProps } from './View';

export function Calculator() {
    const [screenValue, setScreenValue] = useState('0');
    const [formula, setFormula] = useState('0');
    const [isShowingResult, setIsShowingResult] = useState(true);

    const { loading: verifyResultLoading, result: verifyResult } = useVerify();
    const router = useRouter();

    const reset = () => {
        setScreenValue('0');
        setFormula('0');
        setIsShowingResult(true);
    };

    const onKeyClickFactory: ICalculatorViewProps['onKeyClickFactory'] = (
        key
    ) => {
        return () => {
            if (key === '*') {
                setScreenValue(screenValue + '×');
                setFormula(formula + key);
                setIsShowingResult(false);
            } else if (key === '/') {
                setScreenValue(screenValue + '÷');
                setFormula(formula + key);
                setIsShowingResult(false);
            } else if (key === '+' || key === '-') {
                setScreenValue(screenValue + key);
                setFormula(formula + key);
                setIsShowingResult(false);
            } else if (key === '=') {
                const result = calculate(formula).toString();
                setScreenValue(result);
                setFormula(result);
                setIsShowingResult(true);
            } else if (key === 'C') {
                reset();
            } else {
                if (isShowingResult) {
                    setScreenValue(key);
                    setFormula(key);
                } else {
                    setScreenValue(screenValue + key);
                    setFormula(formula + key);
                }
                setIsShowingResult(false);
            }
        };
    };

    const loading = useMemo(
        () => verifyResultLoading || !router.isReady,
        [router.isReady, verifyResultLoading]
    );

    return (
        <>
            <Head>
                <title>Calculator</title>
            </Head>
            <CalculatorView
                screenValue={screenValue}
                isShowingResult={isShowingResult}
                loading={loading}
                verifyResult={verifyResult}
                onKeyClickFactory={onKeyClickFactory}
            />
        </>
    );
}
