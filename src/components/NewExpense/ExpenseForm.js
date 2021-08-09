import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // could have individual useStates for each property
    const defaultState = { title: '', amount: '', date: ''};
    const [formState, setFormState] = useState(defaultState);

    const titleChangeHandler = (event) => {
        // reccomended way when you need to manage previous state
        setFormState((previousState) => {
            return { ...previousState, title: event.target.value }
        });
    }
    const amountChangeHandler = (event) => {
        setFormState((previousState) => {
            return { ...previousState, amount: event.target.value }
        });
    }
    const dateChangeHandler = (event) => {
        setFormState((previousState) => {
            return { ...previousState, date: event.target.value}
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSaveExpense({ ...formState, date: new Date(formState.date), amount: +formState.amount })
        setFormState(defaultState);
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={formState.title} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={formState.amount} onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={formState.date} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;