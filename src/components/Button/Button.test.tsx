import Button from './Button'
import { render, fireEvent, screen } from '@testing-library/react'

test('Button', () => {
  const onClick = jest.fn()
  const view = render(<Button onChange={onClick} label={'button'} />)
  expect(screen.getByText('button')).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button'))
  expect(onClick).toBeCalledTimes(1)
  expect(view).toMatchSnapshot()
})
