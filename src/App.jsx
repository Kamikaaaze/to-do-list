import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='mainDiv'>
    <input className='typeAny' placeholder='Type here...' type='text'/>
    <div className='box'>
      <p className='title'>To Dos..</p>
      <div className='toDoSet'>
      <input id='todo' type='checkbox' className='check'/>
      <label for='check' className='toDo'>Workout from 5pm to 6pm </label>
      <i className="fa-solid fa-xmark"></i>
      </div>
    
    </div>
   </div>
  )
}

export default App
