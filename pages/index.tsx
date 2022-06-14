import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {isAuthenticated} from '@/lib/dapp-store-verify'
import web3app from '../utils/web3app';

export default function Home()
{
  web3app.init();

  const onBuy = async () =>
  {
    await web3app.buy();
  }

  const onVerify = async () =>
  {
    await isAuthenticated(1);
  }

  const onSell = async () =>
  {
    await web3app.sell();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SDK Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={onBuy}>buy</button>
        <button onClick={onSell}>sell</button>
        <button onClick={onVerify}>verify</button>
      </main>
    </div>
  );
}
