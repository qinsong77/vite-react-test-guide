import * as React from 'react'
import { render, screen, act } from '@testing-library/react'
import { checkStatus } from '@api'
import OrderStatus from './OrderStatus'

jest.mock('@api')

const mockCheckStatus = checkStatus as jest.MockedFunction<typeof checkStatus>

beforeAll(() => {
  // we're using fake timers because we don't want to
  // wait a full second for this test to run.
  jest.useFakeTimers()
})

afterAll(() => {
  jest.useRealTimers()
})

test('polling backend on an interval', async () => {
  const orderId = 'abc123'
  const orderStatus = 'Order Received'
  mockCheckStatus.mockResolvedValue({ orderStatus })

  render(<OrderStatus orderId={orderId} />)

  expect(screen.getByText(/\.\.\./i)).toBeInTheDocument()
  expect(mockCheckStatus).toHaveBeenCalledTimes(0)

  // advance the timers by a second to kick off the first request
  // jest.advanceTimersByTime(1000)

  act(() => {
    jest.advanceTimersByTime(1000)
  })

  expect(await screen.findByText(orderStatus)).toBeInTheDocument()

  expect(mockCheckStatus).toHaveBeenCalledWith(orderId)
  expect(mockCheckStatus).toHaveBeenCalledTimes(1)
})
