import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpenses/NewExpense/NewExpense';
import './App.css';
//existe otra forma alternativa  crear una funcion, y es usando arrow function

//function App() {
  //forma alternativa de crear la función, ojo que es opcional, puedes crearlas las funciones con function o con arrow function
const App = () => {
  const expenses = [
    {id: 'e1', title: 'Shopping', amount: 294.67, date: new Date(2024, 2, 6) },
    {id: 'e2', title: 'Travel', amount: 600, date: new Date(2024, 2, 8) },
    {id: 'e3', title: 'Rent Apparment', amount: 400, date: new Date(2024, 2, 10) },
    {id: 'e4', title: 'Food', amount: 50, date: new Date(2024, 2, 11) },
  ]


  return (
    <div className="App">
        <NewExpense />
         <Expenses expensesData = {expenses} />
      
      
      
    </div>
  );
}

export default App;
