import React from "react";

const Expense = (props) => {
    console.log(props);
    if (props.expenseDate === "") {
        let d = new Date();
        console.log(d.getMonth() + "/" + d.getDay() + "/" + d.getFullYear());
        props.expenseDate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay();
    }

    return (
        <tr>
            <td>{props.expenseDate}</td>
            <td>${props.dollarAmount}</td>
            <td>{props.vendor}</td>
            <td>{props.expenseType}</td>
        </tr>
    );
};

export default Expense;
