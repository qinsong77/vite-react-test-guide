import { renderHook } from '@testing-library/react-hooks'
import { act } from '@testing-library/react'
import useCount from './useCount'

test('increment and decrement updates the count', () => {
  const { result } = renderHook(() => useCount())
  expect(result.current.count).toBe(0)

  act(() => result.current.increment())
  expect(result.current.count).toBe(1)

  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})
