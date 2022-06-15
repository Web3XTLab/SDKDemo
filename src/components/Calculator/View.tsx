import {Keyboard} from './components/Keyboard';
import styles from './styles.module.scss';

export interface ICalculatorViewProps
{
    
}

export function CalculatorView(props: ICalculatorViewProps)
{
    return (
        <div className= {styles.Calculator} >
            <div className={styles.container}>
                <div className={styles.screenWrapper} />
                <div className={styles.keyboardWrapper}>
                    <Keyboard />
                </div>
           </div>
        </div>
    );
}