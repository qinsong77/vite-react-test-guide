import { useState } from 'react'

const Counter = () => {
  const [state, setState] = useState(0)
  return (
    <div>
      <p>Counter: {state}</p>
      <button
        onClick={() => setState((state) => state + 1)}
        aria-label="increase-button">
        increase
      </button>
      <button
        onClick={() => setState((state) => state - 1)}
        aria-label="decrease-button">
        decrease
      </button>
    </div>
  )
}

export default Counter
