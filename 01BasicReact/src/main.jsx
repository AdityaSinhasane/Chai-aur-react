import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './App.jsx'
import React from 'react'


function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}


// const reactElement = {
//   type: 'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherUser = "chai aur toast";

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://facebook.com', target:'_blank'},
  'Click me to visit facebook',
  anotherUser
)



createRoot(document.getElementById('root')).render(
  <App/>
)
