import React, { useState } from "react";
import "./CSS/App.css";
//Importing Components
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
    state = {
        inputText: null,
        dollarAmount: null,
        vendor: null,
        expenseType: null,
        expenseDate: null,
        expenses: [null],
    };

    componentDidMount() {
        console.log("Component did mount/render");
        this.setState({
            inputText: "booger",
            dollarAmount: "10",
            vendor: "Target",
            expenseType: "Credit",
            expenseDate: "12/20/2020",
            expenses: [],
        });
    }

    renderContent() {
        if (!this.state.err) {
            console.log("we are error free! Render away");
            return (
                <Form />
                // dollarAmount={this.state.dollarAmount}
                // vendor={this.state.vendor}
                // expenseType={this.state.expenseType}
                // expenseDate={this.state.expenseDate}
                // inputText={this.state.inputText}
                // expenses={this.state.expenses}
            );
        } else {
            console.log("The error is...." + this.state.err);
        }
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <header>
                    <h1 className="display-5">Expense Tracker</h1>
                </header>

                {this.renderContent()}
            </div>
        );
    }
}
export default App;
