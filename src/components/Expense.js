import React from "react";
import Button from "react-bootstrap/Button";

const Expense = (props) => {
    const deleteHandler = () => {
        props.setExpenses(props.expenses.filter((el) => el.id !== props.expense.id));
    };

    return (
        <tr>
            <td>{props.expense.expenseDate}</td>
            <td>${props.expense.dollarAmount}</td>
            <td>{props.expense.vendor}</td>
            <td>{props.expense.expenseType}</td>
            <td>
                <Button onClick={deleteHandler} variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default Expense;
