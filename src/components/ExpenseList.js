import React from "react";
//import Expense from "./Expense";

const ExpenseList = (props) => {
    const expenses = props.expenses;
    console.log(props);
    console.log(expenses);
    return <div className="expense-container">Hello</div>;
};

ExpenseList.defaultProps = {
    expenses: ["12/20/2020", "Target", "123", "Credit"],
};

export default ExpenseList;

{
    /* <table className="table">
                <thead>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Vendor</th>
                    <th>Type</th>
                </thead>
                <tbody>
                    {props.expenses.map((expense) => (
                        <Expense
                            expenseType={props.expenseType}
                            vendor={props.vendor}
                            dollarAmount={props.dollarAmount}
                            expenseDate={props.expenseDate}
                        />
                    ))}
                </tbody>
            </table> */
}
