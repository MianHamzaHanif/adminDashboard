import React from 'react';
import { useAccount, useChainId } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';
import { bscTestnet } from '@reown/appkit/networks';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";


export default function ConnectWalletButton() {
  const { open } = useAppKit();
  const { address, isConnected } = useAccount();
  const chainId = useChainId();

  const handleClick = () => {
    if (isConnected) {
      open({ view: "Account" });  
    } else {
      open({ view: "Connect" });  
    }
  };

  return (
    <button onClick={handleClick} className="btn btn-primary mb-0">
     <MdKeyboardDoubleArrowDown size={20}/>
     {isConnected
        ? chainId !== bscTestnet.id
          ? 'Wrong Network'
          : `${address.slice(0, 6)}...${address.slice(-4)}`
        : 'Connect Wallet'}
    </button>
  );
}
