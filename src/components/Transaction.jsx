import React from 'react';
const Transaction = ({transaction}) =>{
    return(
        <li className ={`transaction Rs{transaction.type.toLowerCase()}`}>
            <span>{transaction.description}</span>
            <span>{transaction.amount}</span>
        </li>
    );
};

export default Transaction;