import React from 'react';

const Expense = ({expenseType, dollarAmount, vendor, expenseDate }) => {
    if (expenseDate ===""){
        let d = new Date();
        console.log(d.getMonth() + "/" +  d.getDay() + "/" + d.getFullYear());
        expenseDate = d.getFullYear() + "-" +  d.getMonth() + "-" + d.getDay();
    }
    // if (dollarAmount ==""){
    //     alert("Please enter a dollar amount");
    // }
    return(
        <tr>
            <td>{expenseDate}</td>
            <td>${dollarAmount}</td>
            <td>{vendor}</td>
            <td>{expenseType}</td>
        </tr>
    
    )};
export default Expense;
