import SearchInput, { Search } from './index'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SearchInput', () => {
  test('renders SearchInput component', async () => {
    render(<SearchInput />)

    // succeeds
    // expect(screen.getByText('Searches for')).toBeInTheDocument()

    // succeeds
    expect(screen.getByText(/Searches for/)).toBeInTheDocument()
    expect(await screen.findByText(/Signed in as Robin/i)).toBeInTheDocument()

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    })

    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument()

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug()
  })
})

describe('Search', () => {
  test('calls the onChange callback handler', () => {
    const onChange = jest.fn()

    render(
      <Search
        value=""
        onChange={onChange}>
        Search:
      </Search>
    )

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    })

    expect(onChange).toHaveBeenCalledTimes(1)
  })
})

describe('Search', () => {
  test('calls the onChange callback handler', async () => {
    const onChange = jest.fn()

    render(
      <Search
        value=""
        onChange={onChange}>
        Search:
      </Search>
    )

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    })

    expect(onChange).toHaveBeenCalledTimes(1)

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript')

    expect(onChange).toHaveBeenCalledTimes(10)
  })
})
