import React, { useState, useEffect } from "react";
import "./CSS/App.css";
import InputForm from "./components/InputForm";
import ExpenseList from "./components/ExpenseList";
import Navbar from "./components/Navbar/Navbar";
import Route from "./components/Route";
import SettingsModal from "./components/SettingsModal";
import { Button } from "react-bootstrap";

let root = document.querySelector(":root");

function App() {
    const [dollarAmount, setDollarAmount] = useState(0);
    const [vendor, setVendor] = useState("");
    const [expenseType, setExpenseType] = useState("none");
    const [expenseDate, setExpenseDate] = useState("");
    const [expenses, setExpenses] = useState([]);

    const [theme, setTheme] = useState(true);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (theme) {
            //Dark Mode
            //Nav
            root.style.setProperty("--theme-color-nav", "#3700b3");
            root.style.setProperty("--theme-color-nav-text", "#ffffff");
            //Text
            root.style.setProperty("--app-theme-color-text", "#ffffff");
            //Gradient Background
            root.style.setProperty("--app-theme-color-back", "#121212");
            root.style.setProperty("--app-theme-color-back-secondary", "#121212");
            //Table
            root.style.setProperty("--app-theme-color-table-row-1", "#ababab");
            root.style.setProperty("--app-theme-color-table-row-2", "#2d2d2d");
            //Buttons
            root.style.setProperty("--app-theme-color-table-button", "#3700b3");
        } else {
            //Light Mode
            //Nav
            root.style.setProperty("--theme-color-nav", "#96151D");
            root.style.setProperty("--theme-color-nav-text", "#000000");
            //Text
            root.style.setProperty("--app-theme-color-text", "#3f3f3f");
            //Gradient Background
            root.style.setProperty("--app-theme-color-back", "#ededed");
            root.style.setProperty("--app-theme-color-back-secondary", "#ededed");
            //Table
            root.style.setProperty("--app-theme-color-table-row-1", "#EAEAEA");
            root.style.setProperty("--app-theme-color-table-row-2", "#F9FAFA");
            //Buttons
            root.style.setProperty("--app-theme-color-table-button", "#22A1DB");
        }
    }, [theme]);

    return (
        <div className="App">
            <Route path="/">
                <Navbar show={show} setShow={setShow} />
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
                <SettingsModal show={show} setShow={setShow} theme={theme} setTheme={setTheme} />
            </Route>
        </div>
    );
}

export default App;
