
function ExpenseForm() {
    const titleChangeHandler = (event) => {
        console.log(event.target.value)
    }
    const amountHandler = (event) => {
        console.log(event.target.value)
    }
    const dateHandler = (event) => {
        console.log(event.target.value)
    }
    return (
        <form>
            <input type='text' placeholder="Enter Title" onChange={titleChangeHandler}/>
            <input type='number' placeholder="Enter Amount" onChange={amountHandler}/>
            <input type='date' onChange={dateHandler}/>
            <button type='submit'>Add Expense</button>
        </form>
    )
}

export default ExpenseForm;