import { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm() {
    //Input del texto
    const [enteredTitle, setEnteredTitle] = useState('')
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        console.log(event.target.value)
    }

    //Input de la cantidad
    const [enteredAmount, setEnteredAmount] = useState('')
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        console.log(`valor de cantidad: ${event.target.value}`)
    }

    //Input de la fecha
    const [enteredDate, setEnteredDate] = useState('')
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        console.log(`valor de cantidad: ${event.target.value}`)
    }
   
    // const inputChangeHandler = (identifier, value) => {
    //     if(identifier === 'title') {
    //         setEnteredTitle(value)
    //     }else if (identifier === 'date') {
    //         setEnteredDate(value)
    //     } else {
    //         setEnteredAmount(value)
    //     }

    // }
    //funcion para manejo del formualario
    const submitHandler = (event) => {
        //con el prevenDeafult evitamos que se envie una soliciutd al servidor y asi evitamos que se recargue la pagina, cuando hacemos clici en el boton del formulario para este caso
        event.preventDefault()
        

        //ahora crearemos neustra funcion para combinar los datos introducidos en el formualario, y esto lo hago porque tengo por separado los estados de cada elemento, si usara objetos, no habria necesidad de hacer la siguente función
        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount,
        }
        console.log(expenseData)

        //Despues de enviar losa datos del formulario, cómo hacemos para que se limpien los campos del formulario?, al usar los estados de froma separada, podemos tambien usar lo que se conoce como "manera vinculante": lo cual significa que para las entradas no solo escucha los cambios, sino que tambien, podemos pasar un nuevo valor a la entrada para que podamos restablecer o cmabiar la entrada mediante programación, para ello tendremos que colcoar el atributo "value, dentro de los elementos input", esto establecerá la propiedad de valor interno que cada elemento de entrada y podremos establecer un nuevo valor.

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
                        {/* // onChange={(event)=> {inputChangeHandler('title', event.target.value)} }/> */}

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
