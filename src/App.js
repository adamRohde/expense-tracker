
import React, { useState } from "react";
import './App.css';
//Importing Components
import Form from './components/Form';
import ExpenseList from "./components/ExpenseList"; 

function App() {
  const [inputText, setInputText] = useState(""); 
  const [dollarAmount, setDollarAmount] = useState(0);
  const [vendor, setVendor] =  useState("");
  const [expenseType, setExpenseType] =  useState("none");
  const [expenseDate, setExpenseDate] =  useState("");
  const [expenses, setExpenses] = useState([]);
  return (
      <div className="App">
          <header>
            <p>Adam's Expense Tracker</p>
          </header>
          <Form
            dollarAmount =    {dollarAmount}
            vendor =          {vendor}
            expenseType=      {expenseType}
            expenseDate=      {expenseDate}
            inputText=        {inputText}
            expenses=         {expenses} 
            setDollarAmount=  {setDollarAmount}
            setVendor=        {setVendor}
            setExpenseType=   {setExpenseType}
            setExpenseDate=   {setExpenseDate}
            setInputText=     {setInputText} 
            setExpenses=      {setExpenses}/>
          <ExpenseList />
      </div>
  );
}

export default App;
  