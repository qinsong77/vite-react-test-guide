import { forEach } from './fun'

describe('mock example', () => {
  const fn = jest.fn((x) => console.log(x)) // mock
  console.log(fn)
  test('callback be call', () => {
    forEach([1, 2, 3], fn)
    expect(fn).toBeCalled()
    expect(fn).toBeCalledTimes(3) // 调用次数
    expect(fn.mock.calls[0][0]).toBe(1) // 第一次执行的参数
    expect(fn.mock.results[0].value).toBeUndefined() // 第一次执行的返回值
  })
})
