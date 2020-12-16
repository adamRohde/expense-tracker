import React from "react";

const Form = ({ setInputText, expenses, setExpenses, inputText }) =>{
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        //prevents the screen from refreshing
        e.preventDefault();
        console.log("pressin the button");
        setExpenses([
            ...expenses, {text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
    };

    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="addExpense-input" />
            <button onClick={submitTodoHandler} className="addExpense-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">Credit</option>
                    <option value="completed">Debit</option>
                    <option value="uncompleted">Cash</option>
                </select>
            </div>
        </form>
    );
}

export default Form;