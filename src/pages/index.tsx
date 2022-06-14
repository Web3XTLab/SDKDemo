import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import {Verify} from '../components/Verify';

export default function Home()
{

  return (
    <div className={styles.container}>
      <Head>
        <title>SDK Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Verify/>
      </main>
    </div>
  );
}
