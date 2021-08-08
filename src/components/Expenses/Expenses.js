import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import "./Expenses.css";
import { useState } from 'react';

const Expenses = (props) => {
  const { items } = props;
  const [selectedYear, updateSelectedYear] = useState('2021');

  const onYearChangeHandler= (year) => {
    console.log(year);
    updateSelectedYear(year);
  }

  return (
      <Card className='expenses'>
      <ExpensesFilter selected={selectedYear} onYearChange={onYearChangeHandler}/>
        <ExpenseItem
          date={items[0].date}
          title={items[0].title}
          amount={items[0].amount}
        />
        <ExpenseItem
          date={items[1].date}
          title={items[1].title}
          amount={items[1].amount}
        />
        <ExpenseItem
          date={items[2].date}
          title={items[2].title}
          amount={items[2].amount}
        />
        <ExpenseItem
          date={items[3].date}
          title={items[3].title}
          amount={items[3].amount}
        />
      </Card>
  );
}

export default Expenses;
