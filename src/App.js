import React, { useState } from 'react'
import NewExpense from './Components/NewExpense/NewExpense';
import Expenses from './Components/Expenses/Expenses';
import './App.css'

const dummydata = [
  {
    id: 'e1',
    title: 'iphone',
    amount: 649,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2019, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(dummydata)


  const addExpensesHandler = (expense) => {
    // console.log('In app.js');
    // console.log(expense);
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }



  return (
    <div id='main'>
      <NewExpense onAddExpenses={addExpensesHandler} />
      <Expenses items={expenses} />


    </div>

  )
}

export default App