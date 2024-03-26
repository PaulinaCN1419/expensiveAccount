import ExpenseForm from '../ExpenseForm/ExpenseForm'
import './NewExpense.css'

function NewExpense (){
    return (
        
            <div className='new-expense'>
                <label>Registro de Gastos</label>
                <ExpenseForm />
            </div>
        

    )
}
export default NewExpense