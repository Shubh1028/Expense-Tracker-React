import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  let liner = ''
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  } else if(props.items.length === 1) {
   liner =  <h2 className='expenses-list__fallback'>Only One Expense. Please Add More</h2>;
  }

  return (
    <ul className='expenses-list'>
      {
      props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      {liner}
    </ul>
  );
};

export default ExpensesList;