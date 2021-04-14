import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import{useState} from 'react'


function NewExpense(props) {
    const [isShown,setIsShown]  = useState(false);

const changeIsShow = () => {
    setIsShown(!isShown)
    console.log(isShown)
}

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddNewExpense(expenseData)

    }

    if (isShown) {
        return (
            <div className='new-expense'>
                <ExpenseForm onCancel={changeIsShow} onSaveExpenseForm={saveExpenseHandler} />
            </div>
        )
    } else {
        return (
            <div className='new-expense'>
                <div className='new-expense__actions'>
                    <button onClick={changeIsShow}> Add new expense</button>
                </div>
            </div>
        )
    }
}

export default NewExpense
