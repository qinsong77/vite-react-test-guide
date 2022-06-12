import { funcA, funcB } from './utils'

jest.mock('./utils', () => {
  const originalModule = jest.requireActual('./utils')
  return {
    ...originalModule,
    funcA: jest.fn(),
  }
})

describe('utils.ts 单元测试', () => {
  test('测试 funcB', () => {
    funcB()
    expect(funcA).toBeCalled()
  })
})
