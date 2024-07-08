import React from 'react';

const Balance = ({ balance }) => {
    return (
        <div className="balance-container">
            <h2>Balance: Rs {balance}</h2>
        </div>
    );
};

export default Balance;
