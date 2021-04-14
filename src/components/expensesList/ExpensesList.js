import ExpenseItem from '../expenseItem/ExpenseItem'
import './ExpensesList.css'

const ExpensesList = props => {
    if (props.data.length === 0) {
       return <p className="expenses-list__fallback"> Found no expenses.</p>
    }
    return <ul className="expenses-list">{
        props.data.map((expense) => (
            <ExpenseItem key={expense.id} expenseDate={expense.date} expenseAmount={expense.amount} expenseTitle={expense.title} />
        ))
    }</ul>

}

export default ExpensesList;