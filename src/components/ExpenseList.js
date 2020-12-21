import React from "react";
import Expense from "./Expense";

const ExpenseList = (props) => {
    const expenses = props.expenses;
    console.log(props);
    console.log(expenses);
    return (
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
    );
};

ExpenseList.defaultProps = {
    expenses: ["12/20/2020", "Target", "123", "Credit"],
};

export default ExpenseList;
