import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usememop from './practise/Usememop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Usememop />
    </>
  )
}

export default App
