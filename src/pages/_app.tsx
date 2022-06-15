import '../styles/globals.css';
import {AppProps} from 'next/app';
import {Web3AppContext} from '../contexts/Web3AppContext';
import web3app from '../utils/web3app';
import {Web3AppInitFrame} from '../components/Web3AppInitFrame';

function App({Component, pageProps}: AppProps)
{
  return (
    <Web3AppContext.Provider value={web3app}>
      <Web3AppInitFrame>
        <Component {...pageProps} />
      </Web3AppInitFrame>
    </Web3AppContext.Provider>
  );
}

export default App;
