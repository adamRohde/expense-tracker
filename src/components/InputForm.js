import React, { useState } from "react";
import "../CSS/App.css";
import Form from "react-bootstrap/Form";
import ExpenseList from "../components/ExpenseList";

const InputForm = (props) => {
    const [dollarAmount, setDollarAmount] = useState(0);
    const [vendor, setVendor] = useState("");
    const [expenseType, setExpenseType] = useState("none");
    const [expenseDate, setExpenseDate] = useState("");

    const getTodaysDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    //Expense Type
    const selectExpenseTypeHandler = (e) => {
        setExpenseType(e.target.value);
    };
    //Vendor
    const inputVendorHandler = (e) => {
        setVendor(e.target.value);
    };
    //Expense Date
    const inputExpenseDateHandler = (e) => {
        setExpenseDate(e.target.value);
    };
    //Dollar Amount
    const inputDollarAmountHandler = (e) => {
        setDollarAmount(e.target.value);
    };

    const submitExpenseHandler = (e) => {
        e.preventDefault();

        if (expenseDate === "") {
            setExpenseDate(getTodaysDate);
        }
        props.setExpenses([
            ...props.expenses,
            {
                id: Math.random() * 1000,
                expenseType: expenseType,
                vendor: vendor,
                expenseDate: expenseDate,
                dollarAmount: dollarAmount,
            },
        ]);
        e.target.reset();
    };

    return (
        <div>
            <Form onSubmit={submitExpenseHandler}>
                <div className="form-row">
                    <Form.Group md="6">
                        <select
                            onChange={selectExpenseTypeHandler}
                            className="input-expense form-select"
                        >
                            <option value="none">Payment Type</option>
                            <option value="credit">Credit</option>
                            <option value="debit">Debit</option>
                            <option value="cash">Cash</option>
                        </select>
                    </Form.Group>
                    <Form.Group md="6">
                        <input
                            onChange={inputVendorHandler}
                            className="input-expense form-control"
                            placeholder="Vendor"
                            required
                        />
                    </Form.Group>
                </div>
                <div className="form-row">
                    <Form.Group md="6">
                        <input
                            type="date"
                            onChange={inputExpenseDateHandler}
                            className="input-expense form-control"
                        />
                    </Form.Group>
                    <Form.Group md="6">
                        <input
                            type="number"
                            onChange={inputDollarAmountHandler}
                            className="input-expense form-control"
                            placeholder="Dollar Amount"
                            required
                        />
                    </Form.Group>
                </div>
                <button
                    className="btn addExpense-button myButtons"
                    id="addExpenseButton"
                    type="submit"
                >
                    <i>Add Expense</i>
                </button>
            </Form>
            <ExpenseList expenses={props.expenses} setExpenses={props.setExpenses} />
        </div>
    );
};

export default InputForm;
