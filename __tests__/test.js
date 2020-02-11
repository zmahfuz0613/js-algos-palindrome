let algos = require("../palindrome.js")


//PALINDROME
test("check if word is a palindrome", () => {
  expect(algos.palindrome("eye")).toBe(true)
  // expect(algos.palindrome("eyed")).toBe(false)
})
