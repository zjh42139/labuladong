const { Difference } = require('./utils')
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
const corpFlightBookings = function (bookings, n) {
  const nums = new Array(n).fill(0)
  const diff = new Difference(nums)
  for (const item of bookings) {
    const [startIndex, endIndex, val] = item
    diff.increment(startIndex - 1, endIndex - 1, val)
  }
  return diff.result()
};
// const bookings = [[1, 2, 10], [2, 3, 20], [2, 5, 25]], n = 5
const bookings = [[1, 2, 10], [2, 2, 15]], n = 2
console.log(corpFlightBookings(bookings, n));