// first solution: using variable to store the reverse string

// export const isPalindrome = (str: string): boolean => {
//   let temp = ''
//   for (let i:number = str.length - 1; i >= 0; i--) {
//     temp += str[i]
//   }

//   return temp === str
// }

// second solution: check the first and last character, then the second and second last character, and so on

// export const isPalindrome = (str: string): boolean => {
//   for (let i=0; i<str.length/2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false
//     }
//   }
//   return true
// }

const isPalindromeRecursion = (str: string, idx: number): boolean => {
  if (idx < str.length / 2) {
    if (str[idx] !== str[str.length - 1 - idx]) {
      return false
    } else {
      return isPalindromeRecursion(str, idx + 1)
    }
  } else {
    return true
  }
}

export const isPalindrome = (str: string): boolean => {
  return isPalindromeRecursion(str, 0)
}