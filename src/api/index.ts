import axios from 'axios'

function checkStatus(orderId: string) {
  // return axios.get(
  //   `http://jsonplaceholder.typicode.com/posts/1?orderId=${orderId}`
  // )
  return new Promise((resolve, reject) =>
    setTimeout(
      () => (status ? resolve(orderId) : reject(new Error('401'))),
      10000 * Math.random()
    )
  )
}

export { checkStatus }
