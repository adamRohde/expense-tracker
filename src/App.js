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
            root.style.setProperty("--theme-color-nav", "#121212");
            root.style.setProperty("--app-theme-color-text", "#ffffff");
            root.style.setProperty("--app-theme-color-back", "rgb(59, 52, 52)");
            root.style.setProperty("--app-theme-color-back-secondary", "rgb(86, 86, 86)");

            root.style.setProperty("--app-theme-color-table-row-1", "rgb(119, 119, 119)");
            root.style.setProperty("--app-theme-color-table-row-2", "rgb(224, 126, 29)");
            root.style.setProperty("--theme-color-nav-text", "#ffffff");
            root.style.setProperty("--app-theme-color-table-button", "#ff0000");
        } else {
            //Light Mode
            root.style.setProperty("--theme-color-nav", "#b2b2b2");
            root.style.setProperty("--app-theme-color-text", "#3f3f3f");
            root.style.setProperty("--app-theme-color-back", "rgb(255, 221, 185)");
            root.style.setProperty("--app-theme-color-back-secondary", "rgb(255, 221, 185)");

            root.style.setProperty("--app-theme-color-table-row-1", "#d3d3d3");
            root.style.setProperty("--app-theme-color-table-row-2", "#b2b2b2");
            root.style.setProperty("--theme-color-nav-text", "#000000");
            root.style.setProperty("--app-theme-color-table-button", "#000cff");
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
