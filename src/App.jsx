import { useState } from 'react'
import './App.css'
import Navebar from './Components/Navbar';
import Todo from './Components/todo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Navebar />
     <Todo />
    </div>
  )
}

export default App
