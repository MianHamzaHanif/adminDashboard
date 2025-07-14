import { cookieStorage, createStorage } from 'wagmi';
import { metaMask, walletConnect } from 'wagmi/connectors';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { bscTestnet } from '@reown/appkit/networks';

export const projectId = '361ae45c3ba2a0c5a70ef79b0de825eb';
export const networks = [bscTestnet];

export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
  ssr: false,
  storage: createStorage({ storage: cookieStorage }),
  connectors: [
    metaMask(),
    walletConnect({ projectId }),
  ],
});

export const config = wagmiAdapter.wagmiConfig;
