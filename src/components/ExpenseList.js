import React from "react";
import Expense from "./Expense";

const ExpenseList = (props) => {
    console.log("ExpenseList");
    console.log(props);
    return (
        <div className="expense-container">
            <table className="table">
                <thead>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Vendor</th>
                    <th>Type</th>
                </thead>
                <tbody>
                    {props.expenses.map((expense) => (
                        <Expense
                            expenseType={expense.expenseType}
                            vendor={expense.vendor}
                            dollarAmount={expense.dollarAmount}
                            expenseDate={expense.expenseDate}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ExpenseList;
