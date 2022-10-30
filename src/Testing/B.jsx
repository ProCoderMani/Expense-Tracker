import { useState } from "react"

const B = (props) => {
const [data, setData] = useState('')
  function  textHandler(event) {
    // console.log(event.target.value)
    setData(event.target.value)

  }
  function myfunction(){
    console.log(data)
}
  return (
    <div>
      Hello B
      <h1>{props.id}</h1>
      <input type="text" onChange={textHandler} />
      <button onClick={myfunction}>click</button>

    </div>
  )
}

export default B
