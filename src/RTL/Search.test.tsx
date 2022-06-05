import React from 'react'
// 引入@testing-library/react提供的方法
import { render, fireEvent, screen } from '@testing-library/react'
import { Search } from './Search'

describe('Search', () => {
  test('calls the onChange callback handler', () => {
    const onChange = jest.fn()
    // Arrange 编排
    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    )
    // Act 执行
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    })
    // Assert 断言
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
