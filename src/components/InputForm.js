import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const InputForm = (props) => {
    //const [newExpense, setNewExpense] = useState([]);

    const inputStyle = {
        color: "blue",
        width: "35vh",
        height: "7vh",
        border: "1px darkgrey solid",
    };

    //Expense Type
    const selectExpenseTypeHandler = (e) => {
        props.setExpenseType(e.target.value);
    };
    //Vendor
    const inputVendorHandler = (e) => {
        props.setVendor(e.target.value);
    };
    //Expense Date
    const inputExpenseDateHandler = (e) => {
        props.setExpenseDate(e.target.value);
    };
    //Dollar Amount
    const inputDollarAmountHandler = (e) => {
        props.setDollarAmount(e.target.value);
    };

    const submitExpenseHandler = (e) => {
        e.preventDefault();
        console.log("Submitting my expenses");

        if (props.dollarAmount == "") {
            alert("Please add a dollar amount");
            console.log("No money");
        } else {
            props.setExpenses([
                ...props.expenses,
                {
                    expenseType: props.expenseType,
                    vendor: props.vendor,
                    expenseDate: props.expenseDate,
                    dollarAmount: props.dollarAmount,
                    id: Math.random() * 1000,
                },
            ]);
        }
    };

    return (
        <Form noValidate>
            <div className="form-row">
                <div className="form-leftColumn">
                    <select
                        onChange={selectExpenseTypeHandler}
                        className="input-expense form-select"
                        style={inputStyle}
                    >
                        <option value="none">None</option>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                        <option value="cash">Cash</option>
                    </select>
                </div>
                <div className="form-rightColumn">
                    <input
                        onChange={inputVendorHandler}
                        name="vendor"
                        className="form-control"
                        // className="form-control input-expense form-control"
                        placeholder="Vendor"
                        style={inputStyle}
                        required
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-leftColumn">
                    <input
                        type="date"
                        onChange={inputExpenseDateHandler}
                        name="date"
                        // className="input-expense form-control"
                        className="form-control"
                        style={inputStyle}
                        required
                    />
                </div>
                <div className="form-rightColumn">
                    <input
                        onChange={inputDollarAmountHandler}
                        name="amount"
                        // className="input-expense form-control"
                        className="form-control"
                        placeholder="Dollar Amount"
                        style={inputStyle}
                        required
                    />
                </div>
            </div>
            <button onClick={submitExpenseHandler} className="btn btn-primary addExpense-button" type="submit">
                <i>Add Expense</i>
            </button>
        </Form>
    );
};

export default InputForm;
