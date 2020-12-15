
import React, { useState } from "react";
import './App.css';
//Importing Components
import Form from './components/Form';
import ExpenseList from "./components/ExpenseList"; 

function App() {
  const [inputText, setInputText] = useState("");
  return (
      <div className="App">
          <header>
            <h1>Adam's Expense Tracker {inputText}</h1>
          </header>
          <Form  setInputText={setInputText}/>
          <ExpenseList />
      </div>
  );
}

export default App;
