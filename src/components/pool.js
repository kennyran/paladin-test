import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const Pool = () => {

    const [dropdown, toggleDropdown] = useState(true);



    return (

        <div>
            <div className="input-ui">
                <div className="input-title">palUNI Pool</div>

                <div className="amount">
                    <Dropdown>
                        <Dropdown.Toggle onClick={() => toggleDropdown(!dropdown)}>
                            UNI
                        </Dropdown.Toggle>
                        {dropdown && (
                            <Dropdown.Menu variant="dark">
                            <Dropdown.Item href="#/action-1" active>
                                AAVE
                            </Dropdown.Item>
                        </Dropdown.Menu>
                        )}
                    </Dropdown>
                    <button className="token-select">UNI</button>
                    <button className="max-btn"><span id="max">MAX</span></button>

                    <div className="balance-text">
                        Balance: <span id="show-balance"></span>
                    </div>

                    <div className="token-amount">
                        <span id="token-quant">0.0</span>
                    </div>
                </div>

                <div className="pool-stats">
                    <div className="stats-pos">
                        <div className="stats-title">Pool Stats</div>
                        <div className="row-1">
                            <div>Total Supply</div>
                            <div id="total-supply">-</div>
                        </div>
                        <div className="row-2">
                            <div>Total Borrowed</div>
                            <div id="total-borrowed">-</div>
                        </div>
                        <div className="row-3">
                            <div>Active Loans</div>
                            <div id="active-loans">-</div>
                        </div>
                        <div className="row-4">
                            <div>Minimum Borrow Period</div>
                            <div id="min-borrow">-</div>
                        </div>
                    </div>
                </div>

                <button className="pool-btn" >
                        CONNECT TO A WALLET
                </button>
                {/* <div className="dropdown">
                    <ul>
                        <li>AAVE</li>
                        <li>stkAAVE</li>
                        <li>COMP</li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default Pool;