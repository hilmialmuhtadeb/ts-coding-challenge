const tempArr: Array<number> = []

const fibonacciSeries = (num: number, i: number): string => {
  if (i === num) {
    return tempArr.join(', ')
  } else {
    if (i < 2) {
      tempArr.push(i)
      return fibonacciSeries(num, i + 1)
    } else {
      tempArr.push(tempArr[i - 1] + tempArr[i - 2])
      return fibonacciSeries(num, i + 1)
    }
  }
}

export const fibonacci = (num: number): string => {
  return fibonacciSeries(num, 0)
}