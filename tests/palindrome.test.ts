import { isPalindrome } from "../src/palindrome"

describe('Palindrome', () => {
  it('should return true if the string is a palindrome', () => {
    expect(isPalindrome('a')).toBe(true)
    expect(isPalindrome('aba')).toBe(true)
    expect(isPalindrome('abba')).toBe(true)
    expect(isPalindrome('abcccba')).toBe(true)
  })

  it('should return false if the string is not a palindrome', () => {
    expect(isPalindrome('hello')).toBe(false)
    expect(isPalindrome('abaa')).toBe(false)
    expect(isPalindrome('ab')).toBe(false)
  })
})