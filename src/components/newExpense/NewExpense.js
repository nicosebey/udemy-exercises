import ExpenseForm from './ExpenseForm'
import './NewExpense.css'



function NewExpense() {
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
    
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseForm={saveExpenseHandler}/>
        </div>
    )
}

export default NewExpense
