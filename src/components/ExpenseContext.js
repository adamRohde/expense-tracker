import React, { createContext, useReducer, useEffect } from "react";
import { expenseReducer } from "./expenseReducer";

export const ExpenseContext = createContext();

const ExpenseContextProvider = (props) => {
    const [expenses, dispatch] = useReducer(expenseReducer, [], () => {
        const localData = localStorage.getItem("expenses");
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(expenses));
    }, [expenses]);
    return <ExpenseContext.Provider value={{ expenses, dispatch }}>{props.children}</ExpenseContext.Provider>;
};

export default ExpenseContextProvider;
