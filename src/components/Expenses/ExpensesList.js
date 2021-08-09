import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {

    if (expenses.length === 0) {
        return (<p className='expenses-list__fallback'>No expenses found.</p>
        )
    }

    return (
        <ul className='expenses-list'>
            {expenses.map(item => {
                return (<ExpenseItem key={item.id} date={item.date}
                    title={item.title}
                    amount={item.amount} />)
            })}
        </ul>
    )
};

export default ExpensesList;