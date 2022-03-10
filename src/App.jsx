import { useState } from 'react'
import './App.css'
import Navebar from './Components/Navbar';
import Todo from './Components/todo';
import Todos from './Components/Todos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Navebar />
     <Todo />
     {/* <Todos /> */}
    </div>
  )
}

export default App
