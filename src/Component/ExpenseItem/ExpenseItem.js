import './ExpenseItem.css'
function ExpenseItem(){
    const expenseDate = new Date(2024, 2, 6)
    return (
        <div className="expense-item">
            <div>Marzo 06 2024</div>
            <div className="expense-item__description">
                <h2>Travel</h2>
                <div className="expensive-item__price">$250</div>
            </div>
        </div>
    )
}
 export default ExpenseItem