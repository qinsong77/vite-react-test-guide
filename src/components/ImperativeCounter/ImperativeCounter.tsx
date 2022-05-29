import * as React from 'react'

const ImperativeCounter: React.FC<any> = (props: any, ref: React.Ref<any>) => {
  const [count, setCount] = React.useState(0)
  React.useImperativeHandle(ref, () => ({
    increment: () => setCount((c) => c + 1),
    decrement: () => setCount((c) => c - 1),
  }))
  return <div>The count is: {count}</div>
}

export default React.forwardRef<any, any>(ImperativeCounter)
