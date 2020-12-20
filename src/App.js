import React, { useState } from "react";
import "./CSS/App.css";
//Importing Components
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: null,
            dollarAmount: null,
            vendor: null,
            expenseType: null,
            expenseDate: null,
            expenses: null,
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <header>
                    <h1 className="display-5">Expense Tracker</h1>
                </header>
                <Form
                    dollarAmount={dollarAmount}
                    vendor={vendor}
                    expenseType={expenseType}
                    expenseDate={expenseDate}
                    inputText={inputText}
                    expenses={expenses}
                    setDollarAmount={setDollarAmount}
                    setVendor={setVendor}
                    setExpenseType={setExpenseType}
                    setExpenseDate={setExpenseDate}
                    setInputText={setInputText}
                    setExpenses={setExpenses}
                />
                <ExpenseList expenses={expenses} />
            </div>
        );
    }
}

export default App;

// const [inputText, setInputText] = useState("");
// const [dollarAmount, setDollarAmount] = useState(0);
// const [vendor, setVendor] = useState("");
// const [expenseType, setExpenseType] = useState("none");
// const [expenseDate, setExpenseDate] = useState("");
// const [expenses, setExpenses] = useState([]);
