export function timerGame(callback: Function, timeout = 1000) {
  console.log('Ready....go!')
  setTimeout(() => {
    console.log('Times up -- stop!')
    callback && callback()
  }, timeout)
}
