import React, { useState, useContext, useEffect } from "react";
import { connectWallet } from "../utils/connectWallet";
import { Web3Context } from "../context/CreateWeb3Context";

const WalletConnectButton = () => {
  const { web3State, updateWeb3State } = useContext(Web3Context);
  const [account, setAccount] = useState(web3State.selectedAccount);

  
  const handleWalletConnection = async () => {
    const { contractInstance, selectedAccount } = await connectWallet();

    if (selectedAccount) {
      setAccount(selectedAccount);
      updateWeb3State({ contractInstance, selectedAccount });
      localStorage.setItem("connectedAccount", selectedAccount); 
    }
  };

  
  const disconnectWallet = () => {
    setAccount(null);
    updateWeb3State({ contractInstance: null, selectedAccount: null });
    localStorage.removeItem("connectedAccount");
  };

  
  useEffect(() => {
    const savedAccount = localStorage.getItem("connectedAccount");
    if (savedAccount && window.ethereum) {
      handleWalletConnection();
    }
  }, []);

  
  const formatAddress = (addr) =>
    addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

  return (
    <div>
      {account ? (
        <div className="flex items-center space-x-2">
          <span className="bg-green-900/50 px-3 py-1 rounded-full font-mono text-sm text-green-300 border border-green-600">
            {formatAddress(account)}
          </span>
          <button
            onClick={disconnectWallet}
            className="bg-red-600 hover:bg-red-700 transition text-black font-semibold px-4 py-1 rounded-full text-sm cursor-pointer"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={handleWalletConnection}
          className="bg-green-400 hover:bg-green-500 transition text-black font-semibold px-4 py-2 rounded-full text-sm cursor-pointer"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnectButton;
