export const heavyCalculation = (num) => {
  let sum = 0
  for (let i = 0; i <= num; i++) {
    sum += i
    sum *= Math.random()
  }
  return sum
}