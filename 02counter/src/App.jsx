import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  //let counter = 5;
  const addValue = () =>{
    if(counter < 5)
      setCounter(counter + 1);
    
    // Interview Question ::
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
  }

  const decreaseValue = () =>{
    if(counter > 0)
      setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
      <p>Footer: {counter}</p>
    </> 
  )
}

export default App
