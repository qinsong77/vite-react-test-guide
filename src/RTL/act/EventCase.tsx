import * as React from 'react'

const EventCase = () => {
  const [counter, setCounter] = React.useState(0)
  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
}

export default EventCase
