import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setDisplay] = useState(false)


    const recieveData = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
          };
          props.onAddExpense(expenseData);
    }

    const displayFormHandler = () => {
        setDisplay(true)
    }

    const stopEditing = () => {
        setDisplay(false)
    }


  return (
    <div className='new-expense'>
       {!isEditing && <button onClick={displayFormHandler}>Add New Expense</button>}
     {isEditing && <ExpenseForm sendEnteredData = {recieveData} onCancel={stopEditing}/> }
    </div>
  );
};

export default NewExpense;