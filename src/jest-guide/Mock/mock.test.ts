describe('mock practice jest.fn()', () => {
  test('测试jest.fn()调用', () => {
    const mockFn = jest.fn()
    const result = mockFn(1, 2, 3)

    // 断言mockFn的执行后返回undefined
    expect(result).toBeUndefined()
    // 断言mockFn被调用
    expect(mockFn).toBeCalled()
    // 断言mockFn被调用了一次
    expect(mockFn).toBeCalledTimes(1)
    // 断言mockFn传入的参数为1, 2, 3
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3)
  })

  test('测试jest.fn()返回固定值', () => {
    const mockFn = jest.fn().mockReturnValue('default')
    // 断言mockFn执行后返回值为default
    expect(mockFn()).toBe('default')
  })

  test('测试jest.fn()内部实现', () => {
    const mockFn = jest.fn((num1, num2) => {
      return num1 * num2
    })
    // 断言mockFn执行后返回100
    expect(mockFn(10, 10)).toBe(100)
  })

  test('测试jest.fn()返回Promise', async () => {
    const mockFn = jest.fn().mockResolvedValue('default')
    const result = await mockFn()
    // 断言mockFn通过await关键字执行后返回值为default
    expect(result).toBe('default')
    // 断言mockFn调用后返回的是Promise对象 ❌
    expect(Object.prototype.toString.call(mockFn())).toBe('[object Promise]')
    // 上面这个实际上返回的是String对象，返回Promise对象的写法要怎么做呢？
  })
})

function forEach(items: any[], callback: Function) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}

describe('.mock属性验证', () => {
  test('test function forEach', () => {
    const mockCallback = jest.fn((x) => 88 + x)
    forEach([0, 1], mockCallback)
    // mock函数被调用的次数
    expect(mockCallback.mock.calls.length).toBe(2)
    // 第一次调用函数时的第一个参数是0
    expect(mockCallback.mock.calls[0][0]).toBe(0)
    // 第一次调用函数时第二个参数时mockCallback
    // expect(mockCallback.mock.calls[0][1]).toBe(1);???
    // 第二次调用函数时第一个参数是1
    expect(mockCallback.mock.calls[1][0]).toBe(1)
    // 第一次函数调用的返回值是88
    expect(mockCallback.mock.results[0].value).toBe(88)
    // 第二次函数调用的返回值是89
    expect(mockCallback.mock.results[1].value).toBe(89)
  })
})
