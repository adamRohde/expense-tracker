// import React from 'react';
// import Expense from "./Expense";

// const ExpenseList = ({ expenses }) => {
//     console.log(expenses);

//     return(
//         <div>
//             <table>
//                 <tr>
//                     <th>Date</th>
//                     <th>Amount</th>
//                     <th>Vendor</th>
//                     <th>Type</th>
//                 </tr>
//             </table>
//             <div className="expense-container">
//                 {/* <table>
//                     <tr>
//                         <th>Name</th>
//                         <th>ID</th>
//                         <th>Favorite Color</th>
//                     </tr>
//                 <table/> */}

//                 <div className="expense-list">
//                     {expenses.map(expense => (
//                         <tr>
//                             <Expense expenseType={expense.expenseType} vendor={expense.vendor} dollarAmount={expense.dollarAmount} expenseDate={expense.expenseDate} />
//                         </tr>
//                     ))}
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default ExpenseList;
