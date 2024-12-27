
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name: 'John',
    age:21
  }

  let newArr = [1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl font-bold text-xl'>Tailwind Test</h1>
      <Card username="chaiaurcode" btnText="Click me"/>
      <Card username="HiteshChoudhary"  btnText="Visit me"/>
    </>
  )
}

export default App
