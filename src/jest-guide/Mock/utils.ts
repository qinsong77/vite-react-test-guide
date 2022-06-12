export function funcA() {
  console.log('A')
}

export function funcB() {
  funcA()
  console.log('B')
}
