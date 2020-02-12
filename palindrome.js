
//PALINDROME
const palindrome = str => {
  // var reg = /[\W_]/g
  // console.log(reg)
  // var smallStr = str.toLowerCase().replace(reg, "")
  let reversed = str
    .split("")
    .reverse()
    .join("")
  if (reversed === str) return true
  return false
}
console.log(palindrome("deye eye eyed"))

module.exports = {
  palindrome
}
