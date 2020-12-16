
import React, { useState } from "react";
import './App.css';
//Importing Components
import Form from './components/Form';
import ExpenseList from "./components/ExpenseList"; 

function App() {
  const [inputText, setInputText] = useState("");
  const [expenses, setExpenses] = useState([]);
  return (
      <div className="App">
          <header>
            <p>Adam's Expense Tracker</p>
          </header>
          <Form 
            inputText=    {inputText}
            expenses=     {expenses} 
            setExpenses=  {setExpenses}
            setInputText= {setInputText}/>

          <ExpenseList />
      </div>
  );
}

export default App;
  