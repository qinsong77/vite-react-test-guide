import { render, screen, act } from '@testing-library/react'
import UseAsyncInEffect from './UseAsyncInEffect'

beforeEach(() => {
  fetch.resetMocks()
})

it('doesnt really fetch', async () => {
  const fakeData = { fake: 'data' }
  jest.spyOn(global, 'fetch').mockImplementation(setupFetchStub(fakeData))

  const res = await fetch('anyUrl')
  const json = await res.json()
  expect(json).toEqual({ data: fakeData })

  global.fetch.mockClear()
})

it('renders title', () => {
  // https://jaketrent.com/post/mock-fetch-jest-test

  const fakeData = {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  }

  window.fetch = jest.fn().mockImplementation(setupFetchStub(fakeData))

  // @ts-ignore
  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: async () => fakeData,
  })

  render(<UseAsyncInEffect />)

  // this happens before the state update is scheduled
  expect(screen.findByText(fakeData.title)).toBeInTheDocument()
})
