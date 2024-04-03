import { useState } from 'react'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import ExpensesFilter from './ExpenseFilter/ExpensesFilter'
import Card from '../UI/Card/Card'
import './Expenses.css'

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2024')
   
    let filterInfoText = '2025, 2026,  2027 '
    
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
    
     const filteredExpenses = props.expensesData.filter((expense) => {
        
        
        return expense.date.getFullYear().toString() === filteredYear
    })

    return(
        <div>
            <Card className='expenses'>
                
                <ExpensesFilter 
                    yearInitial={filteredYear} onFilterChange={filterChangeHandler}
                />
                {/* Para filtrar los gastos por año podriamos usar os props expensesData 
                Posterior voy a presnetrar los gastos segun el año elegido, por lo cual cambiaré props.expenseData por filteredExpenses*/}
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount}
                        date={expense.date}
                />
                ) )}
                
               
            
        </Card>  
    </div>
    )
}
export default Expenses