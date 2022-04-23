import React from 'react';

import ConnectWallet from './connectwallet'

const Header = () => {

    return (
        <div className="App-header">
            <div className="header-logo"></div>
            <ConnectWallet />
        </div>
    )
}

export default Header;