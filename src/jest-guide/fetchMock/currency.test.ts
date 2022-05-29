// https://www.leighhalliday.com/mock-fetch-jest
import { convert } from './currency'

beforeEach(() => {
  fetch.mockClear()
})

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
)

it('covert usd to cad', async () => {
  const rates = await convert('USD', 'CAD')
  expect(rates).toEqual(1.42)
  expect(fetch).toBeCalledTimes(1)
})

it('returns null when exception', async () => {
  fetch.mockImplementationOnce(() => Promise.reject('API is down'))

  const rate = await convert('USD', 'CAD')

  expect(rate).toEqual(null)
  expect(fetch).toHaveBeenCalledWith(
    'https://api.exchangeratesapi.io/latest?base=USD'
  )
})

// beforeEach(() => {
//   fetch.resetMocks()
// })
//
// it('converts correctly', async () => {
//   fetch.mockResponseOnce(JSON.stringify({ rates: { CAD: 1.42 } }))
//
//   const rates = await convert('USD', 'CAD')
//
//   expect(rates).toEqual(1.42)
//   expect(fetch).toHaveBeenCalledTimes(1)
//   expect(fetch).toHaveBeenCalledWith(
//     `https://api.exchangeratesapi.io/latest?base=USD`
//   )
// })
//
// it('catches errors and returns null', async () => {
//   fetch.mockReject(() => 'API failure')
//
//   const rates = await convert('USD', 'CAD')
//
//   expect(rates).toEqual(null)
//   expect(fetch).toHaveBeenCalledTimes(1)
//   expect(fetch).toHaveBeenCalledWith(
//     `https://api.exchangeratesapi.io/latest?base=USD`
//   )
// })
