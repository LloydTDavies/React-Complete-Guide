import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { title, date, amount } = props;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <li className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{amount}</div>
      </li>
    </Card>
  );
}

export default ExpenseItem;
