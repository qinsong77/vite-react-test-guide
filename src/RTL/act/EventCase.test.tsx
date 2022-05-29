import EventCase from '@/RTL/act/EventCase'
import * as ReactDOM from 'react-dom'
import { act } from '@testing-library/react'

it('should increment a counter', () => {
  const el = document.createElement('div')
  document.body.appendChild(el)
  // we attach the element to document.body to ensure events work
  ReactDOM.render(<EventCase />, el)
  const button = el.childNodes[0]
  // for (let i = 0; i < 3; i++) {
  //   button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  // }
  act(() => {
    for (let i = 0; i < 3; i++) {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    }
  })
  expect(button.innerHTML).toBe('3') // this fails, it's actually "1"!
  // expect(button.innerHTML).toBe('3')
})
