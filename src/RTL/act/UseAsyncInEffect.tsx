import { useEffect, useState } from 'react'

const UseAsyncInEffect = () => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      )
      const { title } = await response.json()

      setTitle(title) // this happens after the test is done
    }

    fetchData()
  }, [])

  return <>{title}</>
}
export default UseAsyncInEffect
