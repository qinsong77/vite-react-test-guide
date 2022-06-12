import { useEffect, useState } from 'react'

const UseAsyncInEffect = () => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      )
      const { title } = await response.json()

      // await new Promise((resolve) => setTimeout(resolve, 0))

      setTitle(title) // this happens after the test is done
    }

    fetchData()
  }, [])

  return <h3>{title}</h3>
}
export default UseAsyncInEffect
