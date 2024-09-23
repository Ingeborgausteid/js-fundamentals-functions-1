// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function getRangeofNumbers(a, b) {
  const numbersArray = []
  while (a <= b) {
    numbersArray.push(a)
    a++
  }

  return numbersArray
}

const resultArray = getRangeofNumbers(10, 13)
console.log(resultArray)

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function stringExclamation(string, number) {
  let exclamation = '!'
  for (let i = 1; i < number; i++) {
    exclamation += '!'
  }

  return string.toUpperCase() + exclamation
}

const resultString = stringExclamation('disaster', 6)
console.log(resultString)

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below
function addTime(string, number) {
  const moment = require('moment')

  const initialTime = moment(string, ['HH:mm', 'H:mm'])
  // const formatted = initialTime.format('H:mm')

  // const newTime = initialTime.add(number, 'minutes').format('HH:mm', 'H:mm')

  if (
    moment(initialTime).hours() < 12 ||
    moment(initialTime).hours() === '00'
  ) {
    const newTime = initialTime.add(number, 'minutes').format('H:mm')
    return newTime
  }
  const newTime = initialTime.add(number, 'minutes').format('HH:mm')
  console.log(newTime)
  return newTime
}

const timeResult = addTime('7:50', 4)
console.log(timeResult)

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: getRangeofNumbers, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: stringExclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
