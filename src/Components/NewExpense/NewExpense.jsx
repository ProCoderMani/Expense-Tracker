import React, { useState } from 'react'
import './NewExpenses.css'
import ExpensesForm from './ExpensesForm'
const NewExpense = (props) => {

  const[isEditing, setIsEditing] = useState(false)

  const saveExpensesData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    //  console.log(expenseData);
    props.onAddExpenses(expenseData);
    setIsEditing(false);
  };


  const startEditingHandler =()=>{
    setIsEditing(true);
  };

  const stopEditingHandler=()=>{
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
      {! isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
      { isEditing &&<ExpensesForm onSaveExpensesData={saveExpensesData}  onCancle={stopEditingHandler}/>}


    </div>
  )
}

export default NewExpense