import Expenses from './components/expenses/Expenses'
import NewExpense from './components/newExpense/NewExpense'

const expenses = [
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




function App() {
  const addExpenseHandler = (expense) => {
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
