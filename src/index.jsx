// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux';
// import { store } from './app/store';

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { WagmiProvider } from 'wagmi';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet, bscTestnet, bsc } from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createAppKit } from '@reown/appkit/react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './features/customers/store';
// import { PersistGate } from 'redux-persist/integration/react';
// ✅ Create client
const queryClient = new QueryClient();

// ✅ Reown settings
const projectId = '361ae45c3ba2a0c5a70ef79b0de825eb';

const metadata = {
  name: 'Apollo Mass',
  description: 'Apollo Mass Dapp',
  url: window.location.origin,
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
};

const networks = [bscTestnet, mainnet, bsc];

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: false,
});

// ✅ Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true,
  },
});

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </WagmiProvider>
    </QueryClientProvider>
  </React.StrictMode >
);

reportWebVitals();
