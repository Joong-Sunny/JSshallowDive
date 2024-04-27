self.onmessage = function(e) {
  const result = heavyCalculation(e.data)
  // const result = 2
  self.postMessage(result)
}

const heavyCalculation = (num) => {
  let sum = 0
  for (let i = 0; i <= num; i++) {
    sum += i
    sum *= Math.random()
  }
  return sum
}

