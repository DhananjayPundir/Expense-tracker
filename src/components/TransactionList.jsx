import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions }) => {
    return (
        <div className="transaction-list">
            <h3>Transactions</h3>
            <ul>
                {transactions.map((transaction, index) => (
                    <Transaction key={index} transaction={transaction} />
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
