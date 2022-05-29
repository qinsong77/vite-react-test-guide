import axios from 'axios'

export const fetchList = (status: boolean = true) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (status ? resolve({ code: 200 }) : reject(new Error('404'))),
      3000
    )
  )

export const getOnePost = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts/1')
}
