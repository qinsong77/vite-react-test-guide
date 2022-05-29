import { useState } from 'react'

const ActOne = () => {
  const [title, setTitle] = useState('')

  const handleClick = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // const { title } = await response.json()
    // console.log(title)

    setTitle('Clicked') // act() in RTL render() makes this update happen
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      {title}
    </>
  )
}

export default ActOne
