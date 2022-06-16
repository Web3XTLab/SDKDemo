import React, {useEffect, useState} from 'react';
import {IScreenViewProps, ScreenView} from './View';

export interface IScreenProps extends IScreenViewProps
{
    isShowingResult: boolean;
}

export function Screen(props: IScreenProps)
{
    const {value, isShowingResult} = props;

    const [showingValue, setShowingValue] = useState(value);

    useEffect(() =>
    {
        setShowingValue(value);
    }, [value]);
   
    useEffect(() =>
    {
        setShowingValue('');
        setTimeout(() =>
        {
            setShowingValue(value);
        }, 25)
    }, [isShowingResult]);
         
    return (<ScreenView value={showingValue} />);
}