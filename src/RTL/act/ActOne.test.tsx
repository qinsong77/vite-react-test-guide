import { render, screen, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ActOne from './ActOne'

describe('act test', () => {
  // fail
  it('renders title when clicked fail test', () => {
    render(<ActOne />) // this is wrapped in act()

    userEvent.click(screen.getByRole('button'))

    expect(screen.getByText('Clicked')).toBeInTheDocument()
  })

  it('renders title when clicked with act', () => {
    render(<ActOne />) // this is wrapped in act()

    act(() => {
      userEvent.click(screen.getByRole('button'))
    })

    expect(screen.getByText('Clicked')).toBeInTheDocument()
  })

  // success
  it('renders title when clicked with findByText', async () => {
    render(<ActOne />) // this is wrapped in act()

    userEvent.click(screen.getByRole('button'))

    expect(await screen.findByText('Clicked')).toBeInTheDocument()
  })

  // success
  it('renders title when clicked with waitfor 1', async () => {
    render(<ActOne />) // this is wrapped in act()

    userEvent.click(screen.getByRole('button'))

    await waitFor(() => expect(screen.getByText('Clicked')).toBeInTheDocument())
  })

  // success
  it('renders title when clicked with waitfor 2', async () => {
    render(<ActOne />) // this is wrapped in act()

    await waitFor(() => userEvent.click(screen.getByRole('button')))

    expect(screen.getByText('Clicked')).toBeInTheDocument()
  })
})
