import ExpenseItem from './components/ExpenseItem.js';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  let row = [];
   for(let i =0; i<expenses.length; i++) {
    row.push(<ExpenseItem title= {expenses[i].title} date={expenses[i].date} amount = {expenses[i].amount} key={i}/>)
   }
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <div>{row}</div>
    </div>
  );
}

export default App;