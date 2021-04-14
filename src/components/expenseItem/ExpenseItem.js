import {useState} from 'react'
import './ExpenseItem.css';
import Card from '../card/Card'
function ExpenseItem(props) {

    const [title, setTitle] = useState(props.expenseTitle);
    const clickHandler = () => {
        setTitle('changed')
    }

    return (
        <Card className="expense-item">
            <div className="expense-date">
                <div className="expense-date__month"> {props.expenseDate.toLocaleString('en-US', { month: 'long' })}</div>
                <div className="expense-date__day"> {props.expenseDate.toLocaleString('en-US', { day: '2-digit' })}</div>
                <div className="expense-date__year" > {props.expenseDate.getFullYear()}</div>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.expenseAmount}</div>
                <button onClick={clickHandler}> change</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;