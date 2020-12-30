import React, { useState, useEffect } from "react";
import "./CSS/App.css";
import LocalStorage from "./components/Localstorage";
import InputForm from "./components/InputForm";
import ExpenseList from "./components/ExpenseList";
import Navbar from "./components/Navbar/Navbar";
import SettingsModal from "./components/SettingsModal";

let root = document.querySelector(":root");

function App() {
    const [dollarAmount, setDollarAmount] = useState(0);
    const [vendor, setVendor] = useState("");
    const [expenseType, setExpenseType] = useState("none");
    const [expenseDate, setExpenseDate] = useState("");
    const [expenses, setExpenses] = useState([]);
    const [theme, setTheme] = useState(true);
    const [show, setShow] = useState(false);
    const [storage, setStorage] = useState("0");
    const [updateStorage, setUpdateStorage] = useState(false);

    let myVar;
    myVar = expenses;
    // myVar = "Hello";

    useEffect(() => {
        if (theme) {
            //Dark Mode
            //Nav
            root.style.setProperty("--theme-color-navbar", "#3a005b");
            root.style.setProperty("--theme-color-navbar-text", "#ffffff");
            root.style.setProperty("--theme-color-navbar-burger", "#ffffff");
            //Text
            root.style.setProperty("--app-theme-color-text", "#ffffff");
            //Gradient Background
            root.style.setProperty("--app-theme-color-back", "#383838");
            root.style.setProperty("--app-theme-color-back-secondary", "#383838");
            //Table
            root.style.setProperty("--app-theme-color-table-row-1", "#ababab");
            root.style.setProperty("--app-theme-color-table-row-2", "#2d2d2d");
            //Buttons
            root.style.setProperty("--app-theme-color-table-button", "#ddb244");
        } else {
            //Light Mode
            //Nav
            root.style.setProperty("--theme-color-navbar", "#96151D");
            root.style.setProperty("--theme-color-navbar-text", "#000000");
            root.style.setProperty("--theme-color-navbar-burger", "#000000");
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
            <LocalStorage updateStorage={updateStorage} expenses={expenses} setExpenses={setExpenses} />
            <Navbar show={show} setShow={setShow} />
            <header>
                <h1 className="display-5">Expense Tracker</h1>
            </header>
            <InputForm
                dollarAmount={dollarAmount}
                setDollarAmount={setDollarAmount}
                vendor={vendor}
                setVendor={setVendor}
                expenseType={expenseType}
                setExpenseType={setExpenseType}
                expenseDate={expenseDate}
                setExpenseDate={setExpenseDate}
                expenses={expenses}
                setExpenses={setExpenses}
                storage={storage}
                setStorage={setStorage}
                updateStorage={updateStorage}
                setUpdateStorage={setUpdateStorage}
            />
            {/* <ExpenseList expenses={expenses} setExpenses={setExpenses} /> */}

            <SettingsModal
                show={show}
                setShow={setShow}
                theme={theme}
                setTheme={setTheme}
                storage={storage}
                setStorage={setStorage}
            />
        </div>
    );
}

export default App;
