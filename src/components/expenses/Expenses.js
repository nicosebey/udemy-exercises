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
                <ExpenseItem expenseDate={props.expenses[0].date} expenseAmount={props.expenses[0].amount} expenseTitle={props.expenses[0].title} />
                <ExpenseItem expenseDate={props.expenses[1].date} expenseAmount={props.expenses[1].amount} expenseTitle={props.expenses[1].title} />
                <ExpenseItem expenseDate={props.expenses[2].date} expenseAmount={props.expenses[2].amount} expenseTitle={props.expenses[2].title} />
            </Card>
    )
}

export default Expenses
