import React, { useState } from 'react';

const AddTransaction = ({ onAddTransaction }) => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('Expense');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTransaction({ amount: +amount, description, type });
        setAmount('');
        setDescription('');
    };

    return (
        <form className="transaction-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    required
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
            </div>
            <div className="radio-group">
                <label>
                    <input
                        type="radio"
                        value="Expense"
                        checked={type === 'Expense'}
                        onChange={(e) => setType(e.target.value)}
                    />
                    Expense
                </label>
                <label>
                    <input
                        type="radio"
                        value="Income"
                        checked={type === 'Income'}
                        onChange={(e) => setType(e.target.value)}
                    />
                    Income
                </label>
            </div>
            <button className="btn" type="submit">Add Transaction</button>
        </form>
    );
};

export default AddTransaction;
