import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
<div>
  <h1>chai aur code</h1>
</div>
  )
}
// const reactElement = {
//   type: "a",
//   props: {href: 'https://www.google.com/',
//       target: "_blank",
//   },
//   childern : "click me "
// }
let anotheruser = "ankit"

const anotherElement = (
  <a href="https://www.google.com/" target='_blank'>
    click me , {anotheruser}
  </a>
)


const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com/' , target: '_blank'},
  'click this web site',
  anotherElement
)


ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement
  
)
