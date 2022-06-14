import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import {Verify} from '../components/Verify';
import {Sell} from '../components/Sell';
import {Buy} from '../components/Buy';

export default function Home()
{

  return (
    <div className={styles.container}>
      <Head>
        <title>SDK Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SDKDemo</h1>

        <div className={styles.component}>
          <Buy />
        </div>
        <div className={styles.component}>
          <Sell />
        </div>
        <div className={styles.component}>
          <Verify />
        </div>
      </main>
    </div>
  );
}
