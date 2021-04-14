import './ExpenseForm.css'
import { useState } from 'react'
const ExpenseForm = (props) => {


    const [expenseImput, setExpenseImput] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const changeTitleHandler = (event) => {
        setExpenseImput((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            };
        })
    }


    const changeAmountHandler = (event) => {
        setExpenseImput((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            };
        });
    };


    const changeDateHandler = (event) => {
        setExpenseImput((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            };
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: expenseImput.title,
            amount: expenseImput.amount,
            date: new Date(expenseImput.date)
        }
        props.onSaveExpenseForm(expenseData);
        resetImputData()

    }
    const resetImputData = () => {
        setExpenseImput(() => {
            return {
                title: '',
                amount: '',
                date: ''
            }
        })
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={expenseImput.title} onChange={changeTitleHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={expenseImput.amount} onChange={changeAmountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' value={expenseImput.date} onChange={changeDateHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onCancel}> Cancel</button>
                <button type='submit'> Add expense</button>
            </div>

        </form>
    )
}
export default ExpenseForm;
