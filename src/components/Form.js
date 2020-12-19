import React from "react";

const Form = ({ expenses, setExpenses,
                expenseType, setExpenseType,
                vendor, setVendor,
                expenseDate,  setExpenseDate,
                dollarAmount, setDollarAmount }) => {

    const inputStyle = {
        color: 'blue', 
        width: '35vh', 
        height: '7vh',
        border: '1px darkgrey solid'
    };

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

        if (dollarAmount == ''){

            alert("Please add a dollar amount");
            console.log("No money");

        }else{
            setExpenses([
                ...expenses, {expenseType: expenseType, vendor: vendor, expenseDate: expenseDate,  dollarAmount: dollarAmount, id: Math.random() * 1000 }
            ]);
        }
    };

    return(
        <form>
            <div className="form-row">
                <div className="form-leftColumn">
                    <select onChange={selectExpenseTypeHandler} className="input-expense form-select" style={inputStyle}>
                        <option value="none">None</option>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                        <option value="cash">Cash</option>
                    </select>
                </div>
                <div className="form-rightColumn">
                     <input onChange={inputVendorHandler} name="venodr" className="input-expense form-control" placeholder="Who?" style={inputStyle}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-leftColumn">
                    <input type="date" onChange={inputExpenseDateHandler} name="date" className="input-expense form-control"style={inputStyle}/>
                </div>
                <div className="form-rightColumn">
                    <input onChange={inputDollarAmountHandler} name="amount" className="input-expense form-control" placeholder="How much?" style={inputStyle}/>
                </div>
            </div>
            <button onClick={submitExpenseHandler} className="btn btn-primary addExpense-button" type="submit">
                <i>Add Expense</i>
            </button>
        </form>
    );
}

export default Form;