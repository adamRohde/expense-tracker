
import React from 'react';
import Expense from "./Expense";

const ExpenseList = ({ expenses }) => {
   // console.log(expenses); 
    return(    
        <div className="expense-container">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Vendor</th>
                        <th>Type</th>
                    </tr>
                </thead>   
                <tbody>
                    {expenses.map(expense => (
                        <Expense expenseType={expense.expenseType} vendor={expense.vendor} dollarAmount={expense.dollarAmount} expenseDate={expense.expenseDate} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ExpenseList;  