import React from "react";

const Form = ({ expenses, setExpenses,
                expenseType, setExpenseType,
                vendor, setVendor,
                expenseDate,  setExpenseDate,
                dollarAmount, setDollarAmount }) => {

    //Expense Type
    const selectExpenseTypeHandler = (e) => {
        console.log("Selection Changed");
        console.log("Expense Type " + e.target.value);
        setExpenseType(e.target.value);
    };
    //Vendor
    const inputVendorHandler = (e) => {
        console.log("Vendor " + e.target.value);
        setVendor(e.target.value);
    };
    //Expense Date
    const inputExpenseDateHandler = (e) => {
    console.log("Expense Date " + e.target.value);
    setExpenseDate(e.target.value);
    };
    //Dollar Amount
    const inputDollarAmountHandler = (e) => {
        console.log("Dollar Amount " + e.target.value);
        setDollarAmount(dollarAmount = e.target.value);
    };
  
    const submitExpenseHandler = (e) => {
        //prevents the screen from refreshing
        e.preventDefault();
        console.log("Submitting my expenses");
        setExpenses([
            ...expenses, {expenseType: expenseType, vendor: vendor, expenseDate: expenseDate,  dollarAmount: dollarAmount, id: Math.random() * 1000 }
        ]);
    };

    return(
        <form>
            <div className="form-row">

                <div className="form-leftColumn">
                    <select name="todos" onChange={selectExpenseTypeHandler} className="filter-todo">
                        <option value="none">None</option>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                        <option value="cash">Cash</option>
                    </select>
                </div>

                <div className="form-rightColumn">
                     <input onChange={inputVendorHandler} name="amount" className="input-expense" placeholder="Who'd you give money?" />
                </div>

            </div>
            <div className="form-row">

                <div className="form-leftColumn">
                    <input type="date" onChange={inputExpenseDateHandler} name="date" className="input-expense" />
                </div>

                <div className="form-rightColumn">
                    <input onChange={inputDollarAmountHandler} name="amount" className="input-expense" placeholder="How much?" />
                </div>

            </div>

            <button onClick={submitExpenseHandler} className="addExpense-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>

        </form>
    );
}

export default Form;