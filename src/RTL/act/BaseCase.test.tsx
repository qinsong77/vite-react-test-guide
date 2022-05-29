import { render } from 'react-dom'
import BaseCase from '@/RTL/act/BaseCase'

it('should render 1', () => {
  const el = document.createElement('div')
  render(<BaseCase />, el)
  expect(el.innerHTML).toBe('1') // this fails!
})
