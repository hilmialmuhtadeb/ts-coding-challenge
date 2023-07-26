import { fibonacci } from '../src/fibonacci'

describe('Fibonacci', () => {
  it ('should display fibonacci series correctly', () => {
    expect(fibonacci(8)).toBe('0, 1, 1, 2, 3, 5, 8, 13')
  })
})