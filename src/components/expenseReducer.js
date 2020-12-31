export const expenseReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                {
                    dollarAmount: action.expense.dollarAmount,
                    vendor: action.expense.vendor,
                    expenseType: action.expense.expenseType,
                    expenseDate: action.expense.expenseDate,
                    id: action.expense.id,
                },
            ];
        case "REMOVE_EXPENSE":
            return state.filter((expense) => expense.id !== action.id);
        default:
            return state;
    }
};
