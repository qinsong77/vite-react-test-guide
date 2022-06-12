import React from 'react'
import axios from 'axios'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import StoryList from './StoryList'

jest.mock('axios')

describe('StoryList', () => {
  test('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ]

    // ts类型报错
    // axios.get.mockImplementationOnce(() =>
    //   Promise.resolve({ data: { hits: stories } })
    // )
    const mockedGet = jest.mocked(axios.get) // 带上 jest 的类型提示
    mockedGet.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    ) // 含有 jest 的类型提示

    render(<StoryList />)

    await userEvent.click(screen.getByRole('button'))

    const items = await screen.findAllByRole('listitem')

    expect(items).toHaveLength(2)
  })
})

describe('App', () => {
  test('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ]

    const promise = Promise.resolve({ data: { hits: stories } })

    // @ts-ignore
    axios.get.mockImplementationOnce(() => promise)

    render(<StoryList />)

    await userEvent.click(screen.getByRole('button'))

    // @ts-ignore
    await act(() => promise)

    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })
})
