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

// const Form = ({ expenses, setExpenses,
//     expenseType, setExpenseType,
//     vendor, setVendor,
//     expenseDate,  setExpenseDate,
//     dollarAmount, setDollarAmount }) => {

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>I will not close if you click outside me. Don't even try to press escape key.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

render(<Example />);
