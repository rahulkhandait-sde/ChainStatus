import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  coinbaseWallet,
  metamaskWallet,
  rainbowWallet,
  trustWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import "../styles/globals.css";

// Assuming Scroll chain configuration needs to be added manually.
const scrollChain = {
  id: 534351, // Replace this with the actual Scroll chain ID
  name: "Scroll",
  network: "scroll",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: "https://sepolia-rpc.scroll.io/", // Replace this with the actual RPC URL for Scroll
  },
  blockExplorers: {
    default: { name: "Scroll Explorer", url: "https://explorer.scroll.io" },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={scrollChain}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        rainbowWallet(),
        trustWallet(),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
