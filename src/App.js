import { useState } from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpenses/NewExpense/NewExpense';
import './App.css';

const expensesInitial = [
  {id: 'e1', title: 'Shopping', amount: 294.67, date: new Date(2024, 2, 6) },
  {id: 'e2', title: 'Travel', amount: 600, date: new Date(2025, 2, 8) },
  {id: 'e3', title: 'Rent Apparment', amount: 400, date: new Date(2027, 2, 10) },
  {id: 'e4', title: 'Food', amount: 50, date: new Date(2026, 2, 11) },
]

const App = () => {
  const [expenses, setExpenses] = useState(expensesInitial)

  
  const addExpenseHandler = (expense) => {
    // Forma correcta de actualziar le estado y unir con los datos que previamente estaban en el array de objetos de gastos
    setExpenses((prevExpenses)=> {
      return [expense, ...prevExpenses]
    } )

  }


  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
         <Expenses expensesData = {expenses} />
      
      
      
    </div>
  );
}

export default App;
