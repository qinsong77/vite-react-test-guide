import React from 'react'

export const Search: React.FC<
  React.PropsWithChildren<{
    value: string
    onChange: (e: React.ChangeEvent) => void
  }>
> = ({ value, onChange, children }) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <div>
        <label htmlFor="search">{children}</label>
        <input id="search" type="text" value={value} onChange={onChange} />
      </div>
    </div>
  )
}
