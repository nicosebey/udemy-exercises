import {useState} from 'react'
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/newExpense/NewExpense'

const expensesHardcoded = [
  {
    id: 'e1',
    title:'toilet paper',
    amount: 80,
    date: new Date(2021,3,4)
  },
  {
    id: 'e2',
    title:'condons',
    amount: 803,
    date: new Date(2021,3,4)
  },
  {
    id: 'e3',
    title:'frits',
    amount: 820,
    date: new Date(2021,3,4)
  }
]




const App = () => {
  const [expenses, setExpenses] = useState(expensesHardcoded)

  // const addExpenseHandler = (expense) => {
  //   setExpenses((prevExpenses) => {
  //     return [expense, ...prevExpenses]
  //   });
  // }
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=> { return [expense, ...prevExpenses]})
  }
  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
