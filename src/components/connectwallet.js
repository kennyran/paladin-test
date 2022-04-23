import React, { useEffect, useState } from 'react';

const ConnectWallet = () => {

    const [walletAddress, setWalletAddress] = useState('');

    useEffect (() => {
        getWalletAddress();
    }, [])

    const getWalletAddress = async () => {
        // Check if MetaMask is installed on user's browser
        if(window.ethereum) {

            
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const chainId = await window.ethereum.request({ method: 'eth_chainId'});
                // Check if user is connected to Mainnet
                if (chainId !== '0x2a') {
                    console.log('please connect to kovan')
                }

                setWalletAddress(accounts)

                console.log(walletAddress)
        } else {
            alert("Please install Metamask");
        }

    }

    return (
        {walletAddress} ? (
            <button className="connect-wallet" onClick={ConnectWallet}>
                Connect Wallet
            </button>
        ) : (
            <div>
            {/* check account is defined and then slice the string */}
            {walletAddress &&
              `${walletAddress.slice(0, 6)}...${walletAddress.slice(
                walletAddress.length - 4,
                walletAddress.length
              )}`}
          </div>
        )
    )
}

export default ConnectWallet;