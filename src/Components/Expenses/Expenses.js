import { useState } from 'react'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import ExpensesFilter from './ExpenseFilter/ExpensesFilter'
import Card from '../UI/Card/Card'
import './Expenses.css'

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('')
    //para usar estados deriviados se sugiere hacer lo siguiente
    //declaras una variable
    let filterInfoText = '2025, 2026,  2027 '
    //luego segun lo que seeleccionen en el select, se cambiaran los años, como ves ne la siguiente linea, uso el estado inicial del useState para obtener informacion y comparar y hacer una accion en base a ello, eso seria un estado derivado, sin necesidad de crear un nuevo estado, uso el que se encuentra actualmente y geenro al logico para obtener otro resultado, partidiendo del estado inicial(filteredYear)
    if(filteredYear === '2025'){
        filterInfoText = '2024, 2026,  2027'
    } else if (filteredYear === '2026'){

        filterInfoText = '2024, 2025,  2027'
    } else {
        filterInfoText = '2024, 2025,  2026'
    }
   

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    return(
        <div>
            <Card className='expenses'>
                {/*    Podemos volver a pasar el valor del año seleccionado al componente ExpenseItem para estalecer un enlace bidireccional y pasar el valor del año, como valor desplegable */}
                <ExpensesFilter yearInitial={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* //la siguiente linea es para ver como funciona el estado derividado */}
                <p>Data for {filterInfoText} is hidden</p>
               
                <ExpenseItem 
                    title={props.expensesData[0].title} 
                    amount={props.expensesData[0].amount}
                    date={props.expensesData[0].date}
                />
            
                <ExpenseItem 
                    title={props.expensesData[1].title} 
                    amount={props.expensesData[1].amount}
                    date={props.expensesData[1].date}
                />
                
                <ExpenseItem 
                    title={props.expensesData[2].title} 
                    amount={props.expensesData[2].amount}
                    date={props.expensesData[2].date}
                />
                <ExpenseItem 
                    title={props.expensesData[3].title} 
                    amount={props.expensesData[3].amount}
                    date={props.expensesData[3].date}
                />
            
        </Card>  
    </div>
    )
}
export default Expenses