import '../styles/globals.css';
import {AppProps} from 'next/app';
import { initializeIcons } from '@fluentui/react/lib/Icons';

function App({Component, pageProps}: AppProps)
{
  initializeIcons();
  return (<Component {...pageProps} />  );
}

export default App;
