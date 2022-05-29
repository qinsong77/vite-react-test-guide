import * as React from 'react'

type User = {
  id: string
  name: string
}
function getUser(): Promise<User> {
  return Promise.resolve({ id: '1', name: 'Robin' })
}

function SearchInput() {
  const [search, setSearch] = React.useState<string>('')
  const [user, setUser] = React.useState<null | User>(null)

  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser()
      setUser(user)
    }

    loadUser()
  }, [])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}

      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search || '...'}</p>
    </div>
  )
}

type SearchInputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  children: React.ReactNode
}

function Search({ value, onChange, children }: SearchInputProps) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  )
}

export default SearchInput
