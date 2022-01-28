const { Difference } = require('./utils')
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
const carPooling = function (trips, capacity) {
  const nums = new Array(Math.max(...trips.map(item => item[2])) + 1).fill(0)
  const diff = new Difference(nums)
  for (const item of trips) {
    const [val, startIndex, endIndex] = item
    diff.increment(startIndex, endIndex - 1, val)
  }
  return diff.result().every(item => item <= capacity)
};
const trips = [[2, 1, 5], [3, 3, 7]], capacity = 4 // false
// const trips = [[2, 1, 5], [3, 3, 7]], capacity = 5 // true
// const trips = [[2, 1, 5], [3, 5, 7]], capacity = 3 // true
console.log(carPooling(trips, capacity));