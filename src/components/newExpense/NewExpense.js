import ExpenseForm from './ExpenseForm'
import './NewExpense.css'



function NewExpense(props) {
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddNewExpense(expenseData)
    
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseForm={saveExpenseHandler}/>
        </div>
    )
}

export default NewExpense
