import ExpenseForm from '../ExpenseForm/ExpenseForm'
import './NewExpense.css'

function NewExpense (props){
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString
        }

        props.onAddExpense(expenseData)

    }
    return (
        
            <div className='new-expense'>
                <label>Registro de Gastos</label>
                <ExpenseForm onSaveExpenseData= {saveExpenseDataHandler} />
            </div>
        

    )
}
export default NewExpense