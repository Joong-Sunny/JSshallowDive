self.onmessage = function(e) {
  const receivedBuffer = e.data;
  const receivedView = new Uint8Array(receivedBuffer);

  const result = heavyCalculation(receivedView[0])
  // const result = 2
  self.postMessage(result)
}

const heavyCalculation = (num) => {
  let sum = 0
  console.log("여기는 워커", num)
  for (let i = 0; i <= num; i++) {
    sum += i
    sum *= Math.random()
  }
  return sum
}

