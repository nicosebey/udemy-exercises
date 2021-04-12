import './Expenses.css'
import ExpenseItem from '../expenseItem/ExpenseItem'
function Expenses(props) {
    return (
        <div className="expenses">
            <ExpenseItem expenseDate={props.expenses[0].date} expenseAmount={props.expenses[0].amount} expenseTitle={props.expenses[0].title} />
            <ExpenseItem expenseDate={props.expenses[1].date} expenseAmount={props.expenses[1].amount} expenseTitle={props.expenses[1].title} />
            <ExpenseItem expenseDate={props.expenses[2].date} expenseAmount={props.expenses[2].amount} expenseTitle={props.expenses[2].title} />
        </div>
    )
}

export default Expenses
