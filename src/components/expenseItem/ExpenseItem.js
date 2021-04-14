import './ExpenseItem.css';
import Card from '../card/Card'
function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <div className="expense-date">
                <div className="expense-date__month"> {props.expenseDate.toLocaleString('en-US', { month: 'long' })}</div>
                <div className="expense-date__day"> {props.expenseDate.toLocaleString('en-US', { day: '2-digit' })}</div>
                <div className="expense-date__year" > {props.expenseDate.getFullYear()}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.expenseTitle}</h2>
                <div className="expense-item__price">${props.expenseAmount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;