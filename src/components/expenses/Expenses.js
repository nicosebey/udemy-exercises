import {useState} from 'react'
import './Expenses.css'
import Card from '../card/Card'
import ExpensesFilter from '../expenseFilter/ExpensesFIlter'
import ExpenseItem from '../expenseItem/ExpenseItem'
const Expenses = (props) => {
    const [filteredYear, setSelectedYear] = useState('2000');
    const filterChangeHandler = selectedYear => {
        setSelectedYear(selectedYear)
        console.log(selectedYear)
    }
    return (
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSelectHandler={filterChangeHandler}/>
                {props.expenses.filter(expense => expense.date.getFullYear()==filteredYear).map((expense) => (
                    <ExpenseItem  key={expense.id} expenseDate={expense.date} expenseAmount={expense.amount} expenseTitle={expense.title} />
                ))}
            </Card>
    )
}

export default Expenses
