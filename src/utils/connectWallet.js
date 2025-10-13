import { ethers } from "ethers";
import contractAbi from "../contract/MindChainABI.json";

export const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      throw new Error("Metamask is not installed");
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const selectedAccount = accounts[0];

    console.log("\nSelectedAccount :: " + selectedAccount);

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();


    const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS

    const contractInstance = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    console.log("\nContractInstance :: "+ contractInstance + "SelectedAccount :: " + selectedAccount)

    return { contractInstance, selectedAccount };
    
  } catch (error) {
    console.log("Error in connectWallet :: ", error);
  }
};