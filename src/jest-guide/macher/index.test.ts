const can = {
  name: 'pamplemousse',
  ounces: 12
}

describe('the can', () => {
  test('has 12 ounces', () => {
    expect(can.ounces).toBe(12)
  })

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pamplemousse')
  })
})

const can1 = {
  flavor: 'grapefruit',
  ounces: 12
}
const can2 = {
  flavor: 'grapefruit',
  ounces: 12
}

describe('the La Croix cans on my desk', () => {
  test('have all the same properties', () => {
    expect(can1).toEqual(can2)
  })
  test('are not the exact same can', () => {
    expect(can1).not.toBe(can2)
  })
})
export default {}
