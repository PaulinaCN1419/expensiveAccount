import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../../UI/Card/Card'
import './ExpenseItem.css'


function ExpenseItem(props){

    return (
        // <div className="expense-item card">
            
        //     <ExpenseDate date ={props.date}/>
        //     <div className="expense-item__description">
        //         <h2>{props.title}</h2>
        //         <div className="expensive-item__price">${props.amount}</div>
        //     </div>
        // </div>
        <Card className="expense-item ">
            
            <ExpenseDate date ={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expensive-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem