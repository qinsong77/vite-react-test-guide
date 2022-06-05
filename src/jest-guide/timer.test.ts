import { timerGame } from '@/jest-guide/timer'
const callback = jest.fn()

jest.useFakeTimers()

test('calls the callback after 1 second', () => {
  timerGame(callback)

  expect(callback).not.toBeCalled()

  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setInterval).toHaveBeenCalledTimes(0)
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)

  jest.runAllTimers()

  expect(callback).toBeCalled()
  expect(callback).toHaveBeenCalledTimes(1)
})
