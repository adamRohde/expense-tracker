import React, { useState } from "react";
import "./CSS/App.css";
import InputForm from "./components/InputForm";
import ExpenseList from "./components/ExpenseList";
import Navbar from "./components/Navbar/Navbar";
import Route from "./components/Route";
import SettingsModal from "./components/SettingsModal";

//let root = document.querySelector(":root");

console.log("root");
//console.log(root.style.setProperty);

function App() {
    const [dollarAmount, setDollarAmount] = useState(0);
    const [vendor, setVendor] = useState("");
    const [expenseType, setExpenseType] = useState("none");
    const [expenseDate, setExpenseDate] = useState("");
    const [expenses, setExpenses] = useState([]);
    const [theme, setTheme] = useState([]);

    const [show, setShow] = useState(false);

    return (
        <div className="App">
            <Route path="/">
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
            </Route>

            <Route path="/settings">
                <Navbar />
                <SettingsModal show={show} setShow={setShow} theme={theme} setTheme={setTheme} />
            </Route>
        </div>
    );
}

export default App;
