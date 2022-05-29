import { render, fireEvent, screen } from '@testing-library/react'
import Counter, { App } from './Counter'

describe('Counter', () => {
  it('properly increases and decrease the counter', () => {
    const view = render(<Counter />)
    // const {rerender} = view
    // screen.debug()
    const counter = screen.getByText('Counter: 0')
    fireEvent.click(screen.getByRole('button', { name: /increase/i }))
    expect(counter.textContent).toEqual('Counter: 1')
    fireEvent.click(screen.getByRole('button', { name: /decrease/i }))
    expect(counter.textContent).toEqual('Counter: 0')
  })
})
