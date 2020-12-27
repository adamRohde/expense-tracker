import React, { useState } from "react";
import "./CSS/App.css";
import InputForm from "./components/InputForm";
import ExpenseList from "./components/ExpenseList";
import Navbar from "./components/Navbar/Navbar";

function App() {
    // const [inputText, setInputText] = useState("");
    const [dollarAmount, setDollarAmount] = useState(0);
    const [vendor, setVendor] = useState("");
    const [expenseType, setExpenseType] = useState("none");
    const [expenseDate, setExpenseDate] = useState("");
    const [expenses, setExpenses] = useState([]);
    return (
        <div className="App">
            <Navbar />

            <header>
                <h1 className="display-5">Expense Tracker</h1>
            </header>

            <InputForm
                dollarAmount={dollarAmount}
                vendor={vendor}
                expenseType={expenseType}
                expenseDate={expenseDate}
                expenses={expenses}
                setDollarAmount={setDollarAmount}
                setVendor={setVendor}
                setExpenseType={setExpenseType}
                setExpenseDate={setExpenseDate}
                setExpenses={setExpenses}
            />
            <ExpenseList expenses={expenses} setExpenses={setExpenses} />
        </div>
    );
}

export default App;
