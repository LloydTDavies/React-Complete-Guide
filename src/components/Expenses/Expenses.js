import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import "./Expenses.css";
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const { items } = props;
  const [selectedYear, updateSelectedYear] = useState('2021');

  const onYearChangeHandler = (year) => {
    updateSelectedYear(year);
  }

  const filteredItems = items.filter(item => item.date.getFullYear().toString() === selectedYear);

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={selectedYear} onYearChange={onYearChangeHandler} />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList expenses={filteredItems} />
    </Card>
  );
}

export default Expenses;
