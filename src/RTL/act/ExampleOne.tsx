import * as React from 'react'
const ExampleOne: React.FC = () => {
  const [ctr, setCtr] = React.useState(0)
  React.useEffect(() => {
    setCtr(1)
  }, [])
  return <div>{ctr}</div>
}

export default ExampleOne
