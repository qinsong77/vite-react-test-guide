import SearchInput from './index'
import React from 'react'
import { render, screen } from '@testing-library/react'

describe('SearchInput', () => {
  test('renders SearchInput component', async () => {
    render(<SearchInput />)

    expect(screen.queryByText(/Signed in as/)).toBeNull()
    screen.debug()
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument()
  })
})
