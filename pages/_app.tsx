import type { AppProps } from "next/app";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { endpoint } from "./api/utils/constants";
import "@solana/wallet-adapter-react-ui/styles.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) { // Top-level component that will render our application
  const phantomWallet = new PhantomWalletAdapter(); //instantiated a variable phantomWallet to represent a way to connect to a user’s Phantom wallet in our app

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[phantomWallet]}>
        <WalletModalProvider>
          <Component {...pageProps} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default MyApp;