

import React from 'react';
import Expense from "./Expense";

const ExpenseList = () => {

    return(       
        <div className="expense-container">
            <ul className="expense-list">
                <Expense />
                <Expense />
                <Expense />
            </ul>
        </div>
    )
}
export default ExpenseList; 