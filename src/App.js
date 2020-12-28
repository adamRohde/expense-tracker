import React, { useState, useEffect } from "react";
import "./CSS/App.css";
import InputForm from "./components/InputForm";
import ExpenseList from "./components/ExpenseList";
import Navbar from "./components/Navbar/Navbar";
import Route from "./components/Route";
import SettingsModal from "./components/SettingsModal";
import { Button } from "react-bootstrap";

let root = document.querySelector(":root");

console.log("root");
//console.log(root.style.setProperty);

function App() {
    const [dollarAmount, setDollarAmount] = useState(0);
    const [vendor, setVendor] = useState("");
    const [expenseType, setExpenseType] = useState("none");
    const [expenseDate, setExpenseDate] = useState("");
    const [expenses, setExpenses] = useState([]);
    const [theme, setTheme] = useState(true);
    const [show, setShow] = useState(false);

    // const changeTheme = () => {
    //     root.style.setProperty("--theme-color-nav", "rgb(19, 13, 13)");
    //     root.style.setProperty("--theme-color-back", "rgb(59, 52, 52)");
    // };

    useEffect(() => {
        console.log("initial useEffect from App.js");

        if (theme) {
            console.log("change the theme please Dark Red " + theme);
            root.style.setProperty("--theme-color-nav", "rgb(211, 15, 15)");
            root.style.setProperty("--app-theme-color-back", "rgb(59, 52, 52)");
            root.style.setProperty("-app-theme-color-keys-secondary", "rgb(86, 86, 86)");
        } else {
            console.log("change the theme please Light Blue " + theme);
            root.style.setProperty("--theme-color-nav", "rgb(0, 85, 255)");
            root.style.setProperty("--app-theme-color-back", "rgb(59, 52, 52)");
            root.style.setProperty("-app-theme-color-keys-secondary", "rgb(204, 204, 204)");
        }
    }, [theme]);

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
