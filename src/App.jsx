import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='mainDiv'>
    <div className='box'>
      <p className='title'>To Dos..</p>
      <div className='toDoSet'>
      <input type='checkbox' className='check'/>
      <p className='toDo'>Workout from 5pm to 6pm</p>
      </div>
    
    </div>
   </div>
  )
}

export default App
