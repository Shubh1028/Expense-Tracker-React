import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetails';

function ExpenseItem(props) {

  function deleteExpense() {
    const element = document.getElementById(props.title);

    element.remove();

  }
  
  return (
    <div className='expense-item' id={props.title}>
    <ExpenseDate date = {props.date} />
    <ExpenseDetail title={props.title} amount = {props.amount}/>
    <button onClick={deleteExpense}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
