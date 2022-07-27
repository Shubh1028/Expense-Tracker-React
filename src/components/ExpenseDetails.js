import React, { useState } from 'react';
import './ExpenseItem.css'

function ExpenseDetail(props) {

  const [expense, setExpense] = useState(props.amount)

  const addExpense = () => {
    setExpense(100);
  }

    return (
         <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{expense}</div>
        <button onClick={addExpense}>Add Expense</button>
      </div> 

    )

}

export default ExpenseDetail;