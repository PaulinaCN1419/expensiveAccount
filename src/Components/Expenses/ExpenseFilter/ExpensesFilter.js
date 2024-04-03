
import './ExpensesFilter.css'
function ExpenseFilter(props) {
    // Este manejador de eventos se activa cuando el usuario cambia la selección en el select
    const dropDownChangeHandler = (event) => {
        // console.log(event.target.value)
        props.onFilterChange(event.target.value)

    }

    return (

        <div className='expenses-filter'>
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                {/* el value={props.selectYear} lo coloca para establecer un valor por defecto en el select, que en este caso viene del useState del expenses y le pusimos 2023 */}
                <select value={props.yearInitial} onChange={dropDownChangeHandler}>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                    <option value='2027'>2027</option>
                   

                </select>
                <p>{props.yearInitial}</p>
            </div>
        </div>
    )

}
export default ExpenseFilter