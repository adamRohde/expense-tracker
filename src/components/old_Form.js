import React from "react";

const Form = ({
    expenses,
    setExpenses,
    expenseType,
    setExpenseType,
    vendor,
    setVendor,
    expenseDate,
    setExpenseDate,
    dollarAmount,
    setDollarAmount,
}) => {
    const inputStyle = {
        color: "blue",
        width: "35vh",
        height: "7vh",
        border: "1px darkgrey solid",
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
        console.log("Submitting my expenses");

        if (dollarAmount == "") {
            alert("Please add a dollar amount");
            console.log("No money");
        } else {
            setExpenses([
                ...expenses,
                {
                    expenseType: expenseType,
                    vendor: vendor,
                    expenseDate: expenseDate,
                    dollarAmount: dollarAmount,
                    id: Math.random() * 1000,
                },
            ]);
        }
    };

    return (
        <form>
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
                        name="venodr"
                        className="input-expense form-control"
                        placeholder="Who?"
                        style={inputStyle}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-leftColumn">
                    <input
                        type="date"
                        onChange={inputExpenseDateHandler}
                        name="date"
                        className="input-expense form-control"
                        style={inputStyle}
                    />
                </div>
                <div className="form-rightColumn">
                    <input
                        onChange={inputDollarAmountHandler}
                        name="amount"
                        className="input-expense form-control"
                        placeholder="How much?"
                        style={inputStyle}
                    />
                </div>
            </div>
            <button onClick={submitExpenseHandler} className="btn btn-primary addExpense-button" type="submit">
                <i>Add Expense</i>
            </button>
        </form>
    );
};

export default Form;

<Form onSubmit={submitExpenseHandler}>
    <div className="form-row">
        <div className="form-leftColumn">
            {/* ------------------------------------------------- Type ------------------------------------------------- */}
            <select onChange={selectExpenseTypeHandler} className="input-expense form-select" style={inputStyle}>
                <option value="none">None</option>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
                <option value="cash">Cash</option>
            </select>
        </div>
        <div className="form-rightColumn">
            {/* ------------------------------------------------- Vendor ------------------------------------------------- */}
            <input
                onChange={inputVendorHandler}
                className="form-control input-expense form-control"
                placeholder="Vendor"
                style={inputStyle}
                required
            />
        </div>
    </div>
    <div className="form-row">
        <div className="form-leftColumn">
            {/* ------------------------------------------------- Date ------------------------------------------------- */}
            <input
                type="date"
                onChange={inputExpenseDateHandler}
                className="input-expense form-control"
                style={inputStyle}
                required
            />
        </div>
        <div className="form-rightColumn">
            {/* ------------------------------------------------- Dollar Amount ------------------------------------------------- */}
            <input
                type="number"
                onChange={inputDollarAmountHandler}
                className="input-expense form-control"
                placeholder="Dollar Amount"
                style={inputStyle}
                required
            />
        </div>
    </div>
    <button className="btn btn-primary addExpense-button" type="submit">
        <i>Add Expense</i>
    </button>
</Form>;
