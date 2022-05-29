async function convert(base: string, destination: string) {
  try {
    const result = await fetch(
      `https://api.exchangeratesapi.io/latest?base=${base}`
    )
    const data = await result.json()
    return data.rates[destination]
  } catch (e) {
    return null
  }
}

export { convert }
