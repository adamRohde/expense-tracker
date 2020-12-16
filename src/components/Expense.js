import React from 'react';

const Expense = () => {
    return(
        <div className="expense">
            <li className="expense-item">Hello</li>
            <button className="complete-btn">
             <i className="fas fa-check"> </i>   
            </button>
            <button className="trash-btn">
             <i className="fas fa-track"> </i>   
            </button>
        </div>
    );
};

export default Expense;
