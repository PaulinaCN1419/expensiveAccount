import { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {
    
    const [enteredTitle, setEnteredTitle] = useState('')
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        console.log(event.target.value)
    }

  
    const [enteredAmount, setEnteredAmount] = useState('')
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        console.log(`valor de cantidad: ${event.target.value}`)
    }

    const [enteredDate, setEnteredDate] = useState('')
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        console.log(`valor de cantidad: ${event.target.value}`)
    }
  
    
    const submitHandler = (event) => {
        event.preventDefault()
         
        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount,
        }
        // console.log(expenseData)
        props.onSaveExpenseData(expenseData)


        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')


    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>title</label>
                    <input 
                        type='text' 
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                      

                </div>
                <div className='new-expense__control'>
                    <label >Cantidad</label>
                    <input 
                        type='number' 
                        min='0.01' 
                        step='0.01' 
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Fecha</label>
                    <input 
                        type='date' 
                        min='2024-01-01' 
                        max='2028-12-31' 
                        value={enteredDate}
                        onChange={dateChangeHandler}/>
                        
                </div>
            </div>
            <button type='submit'>Enviar</button>
        </form>

    )
}
export default ExpenseForm
