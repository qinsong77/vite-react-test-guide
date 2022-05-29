import * as React from 'react'
import { render, screen, act } from '@testing-library/react'
import ImperativeCounter from './ImperativeCounter'

test('can call imperative methods on counter component', () => {
  const counterRef = React.createRef()
  render(<ImperativeCounter ref={counterRef} />)
  expect(screen.getByText('The count is: 0')).toBeInTheDocument()

  counterRef.current.increment()
  expect(screen.getByText('The count is: 1')).toBeInTheDocument()

  counterRef.current.decrement()
  expect(screen.getByText('The count is: 0')).toBeInTheDocument()
})
