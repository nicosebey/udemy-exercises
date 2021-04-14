import { useState } from 'react'
import './Expenses.css'
import Card from '../card/Card'
import ExpensesFilter from '../expenseFilter/ExpensesFIlter'
import ExpensesList from '../expensesList/ExpensesList'
const Expenses = (props) => {
    const [filteredYear, setSelectedYear] = useState('2000');
    const filterChangeHandler = selectedYear => {
        setSelectedYear(selectedYear)
        console.log(selectedYear)
    }
    const filteredExpenses = props.expenses.filter(expense => { return expense.date.getFullYear().toString() === filteredYear })


    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSelectHandler={filterChangeHandler} />
                <ExpensesList data={filteredExpenses} />
            </Card>
        </li>
    )
}

export default Expenses
