// src/appkit.js
import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { bscTestnet, mainnet } from '@reown/appkit/networks';

export const projectId = '361ae45c3ba2a0c5a70ef79b0de825eb';

const metadata = {
  name: 'Apollo Mass',
  description: 'Apollo Mass Dapp',
  url: window.location.origin,
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
};

const networks = [bscTestnet, mainnet];

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: false,
});

export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  metadata,
  features: {
    analytics: true,
  },
});
