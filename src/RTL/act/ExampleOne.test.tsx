import * as ReactDOM from 'react-dom'
import ExampleOne from './ExampleOne'
import { act } from 'react-dom/test-utils'
it('should render 1', () => {
  const el = document.createElement('div')
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    ReactDOM.render(<ExampleOne />, el)
  })
  expect(el.textContent).toBe('1') // fail!
})

// it('should render 1', () => {
//   const el = document.createElement('div')
//   ReactDOM.render(<ExampleOne />, el)
//   expect(el.textContent).toBe('1') // fail!
// })
