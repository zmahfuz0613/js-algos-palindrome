const palindrome = str => {
  
  const stringPal = str.toLowerCase().replace(/\s+/g, '')

  let reverseString = []
  for (let i = stringPal.length - 1; i >= 0; i--) {
    reverseString += stringPal[i]
  }

  for (let j = 0; j < stringPal.length; j++) {
    return (stringPal[j] === reverseString[j]) ? true : false

  }
  
  }

console.log(palindrome("a man a plan a canal panama"))

module.exports = {
  palindrome
}
