import { useState } from 'react'
import logo from '../assets/logo.svg'

import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <Link to="/counter" className="App-link">
            counter
          </Link>
          {' | '}
          <Link to="/dynamicForm" className="App-link">
            dynamicForm
          </Link>
        </p>
      </header>
    </div>
  )
}

export default App
