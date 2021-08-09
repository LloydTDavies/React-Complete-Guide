import React, {useState} from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
    const [displayForm, updateDisplayForm] = useState(false);

    const saveExpenseHandler = (expense) => {
        const newExpense = { id: Math.random().toString(), ...expense, };
        props.onAddExpense(newExpense);
        toggleDisplayForm();
    };

    const toggleDisplayForm = () => {
        updateDisplayForm(!displayForm);
    }

    const addNewExpenseHandler = () => {
        toggleDisplayForm();
    }

    let newExpenseContent = <ExpenseForm onCancel={toggleDisplayForm} onSaveExpense={saveExpenseHandler} />

    if(!displayForm) {
        newExpenseContent = <button onClick={addNewExpenseHandler}>Add New Expense</button>
    }

    return (
        <div className='new-expense'>
            {newExpenseContent}
        </div>
    )
};

export default NewExpense;