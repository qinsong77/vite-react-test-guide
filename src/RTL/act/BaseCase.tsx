import * as React from 'react'
function BaseCase() {
  const [ctr, setCtr] = React.useState(0)
  React.useLayoutEffect(() => {
    setCtr(1)
  }, [])
  return <>{ctr}</>
}

export default BaseCase
