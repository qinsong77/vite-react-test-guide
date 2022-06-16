import { fireEvent, render, screen } from '@testing-library/react'
import Counter from './Counter'

describe('Counter', () => {
  it('properly increases and decrease the counter', () => {
    render(<Counter />)
    // const {rerender} = view
    // screen.debug()
    const counter = screen.getByText('Counter: 0')
    fireEvent.click(screen.getByRole('button', { name: /increase/i }))
    expect(counter).toHaveTextContent('Counter: 1')
    fireEvent.click(screen.getByRole('button', { name: /decrease/i }))
    expect(counter).toHaveTextContent('Counter: 0')
  })
})
