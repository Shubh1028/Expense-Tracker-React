import React, { useState } from 'react';
function ExpenseForm() {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData);
    }
    return (
        <form onSubmit={submitForm}>
            <input type='text' placeholder="Enter Title" onChange={titleChangeHandler}/>
            <input type='number' placeholder="Enter Amount" onChange={amountHandler}/>
            <input type='date' onChange={dateHandler}/>
            <button type='submit' >Add Expense</button>
        </form>
    )
}

export default ExpenseForm;