import * as React from 'react'
import { checkStatus } from '@api'

const OrderStatus: React.FC<{ orderId: string }> = ({ orderId }) => {
  const [{ status, data, error }, setState] = React.useReducer(
    (s: Object, a: any) => {
      console.log(s)
      console.log(a)
      return { ...s, ...a }
    },
    { status: 'idle', data: null, error: null }
  )

  React.useEffect(() => {
    let current = true
    function tick() {
      setState({ status: 'pending' })
      checkStatus(orderId).then(
        (d) => {
          if (current) setState({ status: 'fulfilled', data: d })
        },
        (e) => {
          if (current) setState({ status: 'rejected', error: e })
        }
      )
    }
    const id = setInterval(tick, 1000)
    return () => {
      current = false
      clearInterval(id)
    }
  }, [orderId])

  return (
    <div>
      Order Status:{' '}
      <span>
        {status === 'idle' || status === 'pending'
          ? '...'
          : status === 'error'
          ? error.message
          : status === 'fulfilled'
          ? data.orderStatus
          : null}
      </span>
    </div>
  )
}

export default OrderStatus
