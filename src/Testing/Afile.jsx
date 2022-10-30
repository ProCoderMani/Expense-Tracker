import React from 'react'
import B from './B'

const Afile = (props) => {
  return (
    <div>
      Hello
      <B id={props.id}/>

      <h3>{props.id}</h3>
      <h4>{props.title}</h4>
      <h2>{props.amount}</h2>
      <B/>
    </div>
  )
}

export default Afile
