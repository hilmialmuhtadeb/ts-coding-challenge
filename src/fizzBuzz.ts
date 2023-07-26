export const fizzBuzz = (num: number): string => {
  const tempArr: Array<string | number> = []

  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      tempArr.push('Fizz Buzz')
    } else if (i % 5 == 0) {
      tempArr.push('Buzz')
    } else if (i % 3 == 0) {
      tempArr.push('Fizz')
    } else {
      tempArr.push(i)
    }
  }
  
  return tempArr.join(', ')
}