import React, { useState } from 'react';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import  AddTransaction  from './components/AddTransaction';
import './App.css';

const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [showAddTransaction, setShowAddTransaction] = useState(false);

    const balance = transactions.reduce((acc, transaction) => {
        return transaction.type === 'Income' ? acc + transaction.amount : acc - transaction.amount;
    }, 0);

    const addTransaction = (transaction) => {
        setTransactions([transaction, ...transactions]);
        setShowAddTransaction(false);
    };

    return (
        <div className="container">
            <h1>Expense Tracker</h1>
            <Balance balance={balance} />
            <div className="summary">
                <div className="summary-item">
                    <h3>Expense</h3>
                    <p className="expense">Rs {transactions.filter(t => t.type === 'Expense').reduce((acc, t) => acc + t.amount, 0)}</p>
                </div>
                <div className="summary-item">
                    <h3>Income</h3>
                    <p className="income">Rs {transactions.filter(t => t.type === 'Income').reduce((acc, t) => acc + t.amount, 0)}</p>
                </div>
                <button className="btn" onClick={() => setShowAddTransaction(!showAddTransaction)}>
                    {showAddTransaction ? 'Cancel' : 'Add'}
                </button>
                {showAddTransaction && <AddTransaction onAddTransaction={addTransaction} />}
                <TransactionList transactions={transactions} />
            </div>
        </div>
    );
};

export default App;
