import { act, render, screen, waitFor } from '@testing-library/react'
import UseAsyncInEffect from './UseAsyncInEffect'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  })
) as jest.Mock

describe('test use async comp', () => {
  // fail  ❌
  it('renders title', () => {
    jest.spyOn(window, 'fetch').mockResolvedValue({
      json: async () => ({ title: 'Fetched' }),
    } as any)

    render(<UseAsyncInEffect />)

    // this happens before the state update is scheduled
    expect(screen.getByText('Fetched')).toBeInTheDocument()
  })
  // success ✅
  it('renders title with findBy', async () => {
    jest.spyOn(window, 'fetch').mockResolvedValue({
      json: async () => ({ title: 'Fetched' }),
    } as any)

    render(<UseAsyncInEffect />)

    // this happens before the state update is scheduled
    expect(await screen.findByText('Fetched')).toBeInTheDocument()
  })

  // success ✅
  it('renders title with waitFor', async () => {
    jest.spyOn(window, 'fetch').mockResolvedValue({
      json: async () => ({ title: 'Fetched' }),
    } as any)

    render(<UseAsyncInEffect />)

    // eslint: Prefer `findByText` query over using `waitFor` + `getByText`(testing-library/prefer-find-by)
    await waitFor(() => expect(screen.getByText('Fetched')).toBeInTheDocument())
  })

  // pass but not good
  it('renders title 3', async () => {
    jest.spyOn(window, 'fetch').mockResolvedValue({
      json: async () => ({ title: 'Fetched' }),
    } as any)
    // eslint error
    await act(() => {
      render(<UseAsyncInEffect />)
    })

    // this happens before the state update is scheduled
    expect(screen.getByText('Fetched')).toBeInTheDocument()
  })
})
