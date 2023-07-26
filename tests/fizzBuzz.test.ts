import { fizzBuzz } from '../src/fizzBuzz'

describe('FizzBuzz', () => {
  it ('should disply fizz buzz series correctly', () => {
    expect(fizzBuzz(6)).toBe('1, 2, Fizz, 4, Buzz, Fizz');
  })
})