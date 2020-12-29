import React from "react";
import Form from "react-bootstrap/Form";

const InputForm = (props) => {
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
    };

    return (
        <Form onSubmit={submitExpenseHandler}>
            <div className="form-row">
                <Form.Group md="6">
                    {/* ------------------------------------------------- Type ------------------------------------------------- */}
                    <select onChange={selectExpenseTypeHandler} className="input-expense form-select">
                        <option value="none">None</option>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                        <option value="cash">Cash</option>
                    </select>
                </Form.Group>
                <Form.Group md="6">
                    {/* ------------------------------------------------- Vendor ------------------------------------------------- */}
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
                    {/* ------------------------------------------------- Date ------------------------------------------------- */}
                    <input
                        type="date"
                        onChange={inputExpenseDateHandler}
                        className="input-expense form-control"
                        required
                    />
                </Form.Group>
                <Form.Group md="6">
                    {/* ------------------------------------------------- Dollar Amount ------------------------------------------------- */}
                    <input
                        type="number"
                        onChange={inputDollarAmountHandler}
                        className="input-expense form-control"
                        placeholder="Dollar Amount"
                        required
                    />
                </Form.Group>
            </div>
            <button className="btn-primary addExpense-button myButtons" type="submit">
                <i>Add Expense</i>
            </button>
        </Form>
    );
};

export default InputForm;
