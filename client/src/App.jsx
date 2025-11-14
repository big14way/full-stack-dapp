import {useState,useEffect} from 'react'
import {ethers} from 'ethers'
import { useAccount, useWalletInfo } from 'wagmi'
import Memo from './components/Memos'
import Buy from './components/Buy'
import chai from "./chai.png"
import abi from "./contractJson/chai.json"
import './App.css'

function App() {
  const { address, isConnected } = useAccount()
  const { walletInfo } = useWalletInfo()

  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })

  useEffect(()=>{
    const initContract = async()=>{
      try {
        if (!isConnected) {
          console.log('Wallet not connected. Please connect using the button above.')
          return
        }

        const contractAddress="0x61E3CBcBD8E7f422cD2C98948c698bbe8207E9Cc";
        const contractABI=abi.abi;

        // Use WalletConnect or MetaMask provider
        const {ethereum} = window;
        if (!ethereum) {
          console.log('No ethereum provider found')
          return
        }

        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
        )
        setState({provider,signer,contract});
      }
      catch(error){
        console.log('Error initializing contract:', error)
      }
    }

    if (isConnected) {
      initContract()
    }
  },[isConnected, address])

  return (
    <>
     <div >
      <img src={chai} className="img-fluid" alt=".." width="100%" height="25%"/>

      {/* WalletConnect Button */}
      <div style={{ marginTop: "10px", marginLeft: "5px", marginBottom: "10px" }}>
        <appkit-button />
      </div>

      {isConnected && (
        <>
          <p style={{ marginTop: "10px", marginLeft: "5px" }}>
            <small>Connected Account - {address}</small>
          </p>
          {walletInfo && (
            <p style={{ marginLeft: "5px" }}>
              <small>Wallet: {walletInfo.name}</small>
            </p>
          )}
          <Buy state={state} />
          <Memo state={state} />
        </>
      )}

      {!isConnected && (
        <p style={{ marginTop: "10px", marginLeft: "5px" }}>
          <small>Please connect your wallet to continue</small>
        </p>
      )}
    </div>
    </>
  )
}

export default App