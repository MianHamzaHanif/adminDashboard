// import React from 'react';
// import { useAccount, useChainId } from 'wagmi';
// import { useAppKit } from '@reown/appkit/react';
// import { bscTestnet } from '@reown/appkit/networks';
// import { MdKeyboardDoubleArrowDown } from "react-icons/md";


// export default function ConnectWalletButton() {
//   const { open } = useAppKit();
//   const { address, isConnected } = useAccount();
//   const chainId = useChainId();

//   const handleClick = () => {
//     if (isConnected) {
//       open({ view: "Account" });  
//     } else {
//       open({ view: "Connect" });  
//     }
//   };

//   return (
//     <button onClick={handleClick} className="btn btn-primary mb-0">
//      <MdKeyboardDoubleArrowDown size={20}/>
//      {isConnected
//         ? chainId !== bscTestnet.id
//           ? 'Wrong Network'
//           : `${address.slice(0, 6)}...${address.slice(-4)}`
//         : 'Connect Wallet'}
//     </button>
//   );
// }


import React, { useEffect, useState } from 'react';
import { useAccount, useChainId } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';
import { bscTestnet, bsc } from '@reown/appkit/networks';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";


function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isMobile;
}

export default function ConnectWalletButton() {
  const { open } = useAppKit();
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const isMobile = useIsMobile();

  const handleClick = () => {
    if (isConnected) {
      open({ view: "Account" });  
    } else {
      open({ view: "Connect" });  
    }
  };

  return (
    <button onClick={handleClick} className="btn-landing mb-0 d-flex align-items-center text-white rounded border-0 outline-0 p-2" style={{backgroundColor: "#7b4fe2"}}>
     <MdKeyboardDoubleArrowDown size={20} className='d-lg-flex d-none' />
     {isConnected
  ? (chainId !== bscTestnet.id && chainId !== bsc.id)
    ? isMobile
      ? 'Wrong'
      : 'Wrong Network'
    : isMobile
      ? `${address.slice(0, 3)}...${address.slice(-2)}`
      : `${address.slice(0, 6)}...${address.slice(-4)}`
  : isMobile
    ? 'Connect'
    : 'Connect Wallet'
}
    </button>
  );
}
