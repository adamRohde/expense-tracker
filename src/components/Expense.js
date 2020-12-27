import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Expense = (props) => {
    console.log(props);

    return (
        <tr>
            <td>{props.expenseDate}</td>
            <td>${props.dollarAmount}</td>
            <td>{props.vendor}</td>
            <td>{props.expenseType}</td>
            <td>
                <Button variant="danger">Remove</Button>{" "}
            </td>
        </tr>
    );
};

export default Expense;
