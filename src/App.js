import ExpenseItem from './components/expenseItem/ExpenseItem'
import Expenses from './components/expenses/Expenses'


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
  return (
    <div>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
