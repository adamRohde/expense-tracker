import React from "react";
import Button from "react-bootstrap/Button";

const Expense = ({ expense, expenses, setExpenses }) => {
    const deleteHandler = () => {
        console.log("expense");
        console.log(expenses);
        setExpenses(expenses.filter((el) => el.id !== expense.id));
    };
    return (
        <tr>
            <td>{expense.expenseDate}</td>
            <td>${expense.dollarAmount}</td>
            <td>{expense.vendor}</td>
            <td>{expense.expenseType}</td>
            <td>
                <Button onClick={deleteHandler} variant="danger">
                    Remove
                </Button>{" "}
            </td>
        </tr>
    );
};

export default Expense;
