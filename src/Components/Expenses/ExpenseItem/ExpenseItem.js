import React, { useState } from 'react'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../../UI/Card/Card'
import './ExpenseItem.css'



function ExpenseItem(props){

    const [title, setTitle] = useState(props.title)
    const saludar = () => {
        //ahora si se actualzará el valor del titulo
        setTitle('Update') 
        console.log('Hola hice un click')
    }

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
                <h2>{title}</h2>
                <div className="expensive-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={()=> {console.log('Clicked')}}>change</button> */}
            <button onClick={saludar}>Change</button>
        </Card>
    )
}
export default ExpenseItem